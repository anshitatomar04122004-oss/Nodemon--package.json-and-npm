const http = require('http');
const server = http.createServer((req, res) => {
  
    if(req.urll=='/'){
        res.end(`
            <h1>Hello from Sharpener</h1>
            <h1>This is the Homepage</h1>
            <h1>Welcome to the world of Node.js</h1>
            <h1>We are learning Node.js</h1>
            <h1>Please visit our website for more information</h1>`)
    }
});
server.listen(3000, () => {
    console.log('Server is running');
});