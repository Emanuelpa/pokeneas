const express = require('express')
const fs = require('fs')
const router = express.Router()
const pokeneas = require('../data/pokeneas')

router.get('/pokenea/image', (req, res) => {
  const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)]

  let containerId = 'No disponible'
  try {
    const cgroup = fs.readFileSync('/proc/self/cgroup', 'utf8')
    const match = cgroup.match(/\/docker\/([a-f0-9]+)/)
    if (match) {
      containerId = match[1].substring(0, 12)
    }
  } catch (err) {
    console.error('Error al obtener ID del contenedor:', err.message)
  }

  res.render('pokeneaImage', { pokenea, containerId })
})

module.exports = router
