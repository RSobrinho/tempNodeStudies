// global variables in node

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about enviroment where the program is being executed

console.log(__filename)
setInterval(() => {
  console.log('Hello world')
}, 1000)
