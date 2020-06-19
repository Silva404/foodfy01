const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('Public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true,
    autoescape: false
})


server.get('/', (req, res) => {
    res.render('home')
})

server.get('/recipes', (req, res) => {
    res.render('recipes')
})


server.get('/about', (req, res) => {
    res.render('about')
})



server.listen(3000)