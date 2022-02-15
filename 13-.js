// npm - global command, comes with node

// local dependency - use it only in this particula project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)

// - Formas de criar um package.json -

// manual approach (create package.json in the root, create properties etc)
// POR FAVOR, FAÇA ISSO NO ROOT SE VC DECIDIR CRIAR NO BRAÇO O PACKAGE.JSON
// demora mto

// npm init (step by step, press enter to skip)

// npm init -y (everything default)

// porque precisamos do package json, porque agora todos os packages que eu quiser alocar localmente, vao ser dependencias desse primeiro

const _ = require('lodash') // diferente dos modulos built-in, que vc n precisa instalar

const items = [1, [2, [3, [4, [5]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems, items)
