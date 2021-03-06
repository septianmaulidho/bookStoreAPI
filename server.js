const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const getStores = require('./routes/bookstores/getStores')
const addStores = require('./routes/bookstores/addStores')
const editStores = require('./routes/bookstores/editStores')
const deleteStores = require('./routes/bookstores/deleteStores')

const getCategory = require('./routes/categoryroute/getCategory')
const addCategory = require('./routes/categoryroute/addCategory')
const editCategory = require('./routes/categoryroute/editCategory')
const deleteCategory = require('./routes/categoryroute/deleteCategory')

const getBooks = require('./routes/books/getBooks')
const addBooks = require('./routes/books/addBooks')
const editBooks = require('./routes/books/editBooks')
const deleteBooks = require('./routes/books/deleteBooks')

const app = express()
app.use(rootRoute)

app.use(bodyParser.json())
app.use(getStores)
app.use(addStores)
app.use(editStores)
app.use(deleteStores)

app.use(getCategory)
app.use(addCategory)
app.use(editCategory)
app.use(deleteCategory)

app.use(getBooks)
app.use(addBooks)
app.use(editBooks)
app.use(deleteBooks)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
