const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exhbs = require('express-handlebars')
const dbo = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))

// View engine setup
app.engine('hbs', exhbs.engine({
    layoutsDir: 'views/',
    defaultLayout: "main",
    extname: "hbs"
}))
app.set('view engine', 'hbs')
app.set('views', 'views')

// SINGLE correct route
app.get('/', async (req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    const cursor = collection.find({})
    let mydata = await cursor.toArray()

    let message = 'test'
    res.render('main', { message, mydata })
})

app.listen(8000, () => {
    console.log('listening to 8000 port')
})