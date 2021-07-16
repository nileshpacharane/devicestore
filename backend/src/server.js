const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server listining to ${server.address().port}`);
    console.log(`Hit Following URl in browser as http://localhost:${server.address().port}/`);
})