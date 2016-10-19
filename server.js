const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000
const app = express()

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname + '/src'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, './', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
