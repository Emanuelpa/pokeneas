const express = require('express')
const router = express.Router()
const { getRandomPokenea, getContainerId } = require('./services/pokeneaService')

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/pokenea', (req, res) => {
    const pokenea = getRandomPokenea()
    const { id, nombre, altura, habilidad } = pokenea
    res.json({ id, nombre, altura, habilidad })
})

router.get('/pokenea/image', (req, res) => {
    const pokenea = getRandomPokenea()
    const containerId = getContainerId()
    res.render('pokeneaImage', { pokenea, containerId })
})

module.exports = router