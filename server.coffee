express = require "express"
http = require "http"
open = require "open"
ip = require "ip"
fs = require "fs"

app = express()

app.use "/styles", express.static(__dirname + "/styles")
app.use "/scripts", express.static(__dirname + "/scripts")

app.get "/", (req, res) ->
  res.send fs.readFileSync("index.html", "utf-8")

app.get "/cache.js", (req, res) ->
  res.send fs.readFileSync("cache.js", "utf-8")

app.listen 3000
console.log('Listening on port 3000...')

open "http://#{ip.address()}:3000"