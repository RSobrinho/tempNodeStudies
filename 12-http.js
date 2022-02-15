// http module allow us to set up a web server

const http = require('http')

// req = represents the incoming request: tipo qnd alguem tenta entrar no seu site (tipo apertar a campainha)
// res = what you are sending back: oq vc da de resposta (vc responde de alguma forma)

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our homePage')
    res.end()
  }
  if (req.url === '/about') {
    res.write('ABOGUS')
    res.end()
  }
  res.end(`
  <h1>Oops!!!</h1>
  <p>Caraio, sai daq mlk</p>
  <a href="/">back home</a>`)
})

server.listen(5123)
