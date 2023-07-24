const http = require('http');
const routes = require("./routes");
const { hostname, hostport } = require('./config');

const server = http.createServer(async (request, response) => {
    routes(request, response);
});

server.listen(hostport, () => {
    console.log(`Server running on http://${hostname}:${hostport}`);
});
