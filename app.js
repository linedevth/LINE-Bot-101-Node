const bodyParser = require('body-parser')
const request = require('request')
const express = require('express')

const app = express()
const port = process.env.PORT || 4000
const hostname = '127.0.0.1'
const HEADERS = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer xxxxx'
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Push
app.get('/webhook', (req, res) => {
	// push block
	let msg = 'Hello World!'
	push(msg)
	res.send(msg)
})

// Reply
app.post('/webhook', (req, res) => {
	// reply block
	let reply_token = req.body.events[0].replyToken
	let msg = req.body.events[0].message.text
	reply(reply_token, msg)
})

function push(msg) {
	let body = JSON.stringify({
		// push body
		to: 'yyyyy',
		messages: [
			{
				type: 'text',
				text: msg
			}
		]
	})
	curl('push', body)
}

function reply(reply_token, msg) {
	let body = JSON.stringify({
		// reply body
		replyToken: reply_token,
		messages: [
			{
				type: 'text',
				text: msg
			}
		]
	})
	curl('reply', body);
}

function curl(method, body) {
	request.post({
		url: 'https://api.line.me/v2/bot/message/' + method,
		headers: HEADERS,
		body: body
	}, (err, res, body) => {
		console.log('status = ' + res.statusCode)
	})
}

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})