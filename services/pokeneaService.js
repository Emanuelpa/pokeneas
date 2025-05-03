const fs = require('fs')
const pokeneas = require('../data/pokeneas')

function getRandomPokenea() {
    return pokeneas[Math.floor(Math.random() * pokeneas.length)]
}

function getContainerId() {
    try {
        const cgroup = fs.readFileSync('/proc/self/cgroup', 'utf8')
        const match = cgroup.match(/\/docker\/([a-f0-9]+)/)
        if (match) {
            return match[1].substring(0, 12)
        }
    } catch (err) {
        console.error('Error al obtener ID del contenedor:', err.message)
    }
    return 'No disponible'
}

module.exports = {
    getRandomPokenea,
    getContainerId
}