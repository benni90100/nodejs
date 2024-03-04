const crypto = require('crypto');
console.log(Object.keys(crypto));
const leghtId = 8
const randomId = crypto.randomBytes(leghtId)
const id = randomId.toString("hex")
console.log(id)
