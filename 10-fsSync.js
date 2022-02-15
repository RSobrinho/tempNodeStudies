const { readFileSync, writeFileSync } = require('fs') // eu poderia fazer isso aq tbm: const fs = require('fs') --> fs.readFileSync... eu so desconstrui o bgl
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
  './content/pinto.txt',
  `aqui esta o resultado: ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('Starting the next one')
// se o arquivo nao existe, o node vai criar, se ja existe, ele sobrescreve

// com a { flag: 'a' }, vc ADICIONA no arquivo que ja existe, mais texto, nao sobrescreve mais

// ESSA FORMA, É A FORMA SÍNCRONA DE FAZER NO NODE

// É UMA FORMA EXTREMAMENTE PESADA DE SE FAZER NO NODE.JS

// sincrono quer dizer que ele le normalmente, linha por linha de cima pra baixo
// ou seja, SOMENTE qnd vc terminar uma tarefa, que vai pra outra
