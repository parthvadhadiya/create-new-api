'use strict'

function Pannel() {
}

Pannel.prototype.index = async function(ctx) {
    ctx.body="API is Alive";
}

module.exports = Pannel