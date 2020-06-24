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

// server.get('/page404', (req, res) => {
//     res.render('page404')
// })

server.get('/your-recipe/:index', (req, res) => {
    const id = req.params.index

    const recipe = data.find(recipe => {
        if (recipe.id == id) {
            return true
        }
    })
    if (!recipe) {
        res.status(404).render('page404')
    }

    res.render('your-recipe', { recipes: recipe })
})



server.listen(4000)