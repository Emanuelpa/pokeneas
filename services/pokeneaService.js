const fs = require('fs')
const pokeneas = require('../data/pokeneas')
const os = require("os")

function getRandomPokenea() {
    return pokeneas[Math.floor(Math.random() * pokeneas.length)]
}

function getContainerId() {
    return os.hostname()
}

module.exports = {
    getRandomPokenea,
    getContainerId
}