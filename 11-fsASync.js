const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/resultadoAssincrona.txt',
      `aqui esta o resultado: ${first}, ${second}`,
      // { flag: 'a' }
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})

console.log('starting the next task')

// forma assincrona

// assincrona/non-blocking(sem bloqueio) ou sincrona/blocking
// e alternativas aos callbacks infinitos

// nas chamadas assincronas, vc pode chamar varias tarefas, ou seja, varios usuarios ao mesmo tempo, e depois terminar com a task

// ai o cara diz que tipo, a gnt só fez simples coisinhas, mas ja foi um inferno de callbacks

// ah, e pra deixar claro, ele utilizou esse ler, e o escrever como exemplos de como seriam tarefas no node. E tipo, na maioria das coisas, vc vai read e write do database

// entao a alternativa seria utilizando: promisses e async await

// ah, e no resto do curso, ele vai utilizar async await, pq na opiniao dele é mais facil
