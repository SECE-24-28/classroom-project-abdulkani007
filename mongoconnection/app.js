const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exhbs = require('express-handlebars')
const dbo = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('hbs', exhbs.engine({
    layoutsDir: 'views/',
    defaultLayout: "main",
    extname: "hbs"
}))
app.set('view engine', 'hbs')
app.set('views', 'views')


app.get('/', async (req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    let mydata = await collection.find({}).toArray()

    res.render('main', { mydata })
})


app.post('/insert', async (req, res) => {
    const database = await dbo.getDataBase()
    const collection = database.collection('books')

    await collection.insertOne({
        title: req.body.title,
        author: req.body.author
    })

    res.redirect('/')
})


app.get('/delete/:id', async (req, res) => {
    const database = await dbo.getDataBase()
    const collection = database.collection('books')
    const { ObjectId } = require('mongodb')

    await collection.deleteOne({ _id: new ObjectId(req.params.id) })

    res.redirect('/')
})


app.get('/edit/:id', async (req, res) => {
    const database = await dbo.getDataBase();
    const collection = database.collection('books');
    const { ObjectId } = require('mongodb');

    const book = await collection.findOne({ _id: new ObjectId(req.params.id) });

    res.render('edit', { layout: false, book });  // VERY IMPORTANT
});



app.post('/update/:id', async (req, res) => {
    const database = await dbo.getDataBase()
    const collection = database.collection('books')
    const { ObjectId } = require('mongodb')

    await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { title: req.body.title, author: req.body.author } }
    )

    res.redirect('/')
})

app.listen(8000, () => {
    console.log('Server running on port 8000')
})
