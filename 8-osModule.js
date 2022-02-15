// Built-int modules

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)
// method returns the system uptime in seconds

const currentOS = {
  name: os.type(), // nome do sistema operacional
  release: os.release(), // versao do os
  totalMem: os.totalmem(), // total de memoria do os
  frereMem: os.freemem() // memoria livre do os
}

setInterval(() => {
  console.log(`The System uptime is ${os.uptime()} seconds\n`) // numero de segundos que o node ta rodando

  console.log(currentOS)
}, 1000)
