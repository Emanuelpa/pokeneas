const express = require('express')
const router = express.Router()
const pokeneas = require('../data/pokeneas')

router.get('/pokenea', (req, res) => {
  const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)]
  const { id, nombre, altura, habilidad } = pokenea
  res.json({ id, nombre, altura, habilidad })
})

module.exports = router
