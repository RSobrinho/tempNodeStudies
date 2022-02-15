// Modules - Encapsulated code (only share minimum (what we want))
// CommonJS, every file in node is a module (by default)

const names = require('./4-names') // SEMPRE, SEMPRE, SEMPRE CARALHO, COMECE COM ., OU .. CASO ESTEJA UMA PASTA ACIMA
// aqui deu erro porque tem multiplos nomes nessa variavel do require, ent eu posso simplesmente
// passar por literal, tipo {rafael, josh} ou
// passar na variavel names.rafael p/ exemplo

const sayHi = require('./5-utils')
const tioBOB = require('./6-alternativeFlavor')
require('./7-mindGrenade') // quando eu chamo um require, soq sem atribuir a algo, ele simplesmente roda todo o codigo, e se houver algo executavel la, ele vai fazer

// sayHi(names.rafael)
// sayHi(names.josh)
//sayHi(secret)
