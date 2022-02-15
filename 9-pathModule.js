const path = require('path')

console.log(path.sep) // separador especifico de cada plataforma

const filePath = path.join('/content', 'subfolder', 'test.txt') // voce especifica e meio que cria, o path de determinado lugar, ou coisa, comecando com o primeiro paramentro
console.log(filePath)

const base = path.basename(filePath) // retorna o ultimo path especificado, no caso o test.txt
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // retorna do primeiro parametro, ate o mais da esquerda, absolutamente
console.log(absolute)
