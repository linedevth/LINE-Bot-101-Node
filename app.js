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
})

// Reply
app.post('/webhook', (req, res) => {
	// reply block
})

function push(msg) {
	let body = JSON.stringify({
    // push body
  })
  // curl
}

function reply(reply_token, msg) {
	let body = JSON.stringify({
    // reply body
  })
  // curl
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