const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.use(express.static('Public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true,
    autoescape: false
})


server.get('/', (req, res) => {
    res.render('home', { recipes: data })
})

server.get('/recipes', (req, res) => {
    res.render('recipes')
})

server.get('/newrecipe', (req, res) => {

    res.render('new-recipe')
})

server.get('/your-recipe', (req, res) => {
    const id = req.query.id

    const recipe = data.find(recipe => {
        if (recipe.id == id) {
            return true
        }
    })
    if (!recipe) {
        res.send('Receita não encontrada.')
        return
    }

    res.render('your-recipe', { recipes: recipe })
})



server.listen(3000)