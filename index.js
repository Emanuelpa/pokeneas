const express = require('express')
const path = require('path')  
const app = express()
const port = 3000

const homeRoute = require('./routes/home')
const pokeneaRoute = require('./routes/pokenea')
const pokeneaImageRoute = require('./routes/pokeneaImage')

app.use(homeRoute)
app.use(pokeneaRoute)
app.use(pokeneaImageRoute)

app.set('view engine', 'ejs')
app.set('views', './views')


app.use('/static', express.static(path.join(__dirname, 'static')));

app.listen(port, () => {
  console.log(`Servidor Pokenea corriendo en http://localhost:${port}`)
})
