const http = require('http');
const routes = require("./routes");
require('dotenv').config();

const HOSTNAME = process.env.HOSTNAME;
const HOST_PORT = process.env.HOST_PORT;

const server = http.createServer(async (request, response) => {
    routes(request, response);
});

server.listen(HOST_PORT, () => {
    console.log(`Server running on port ${HOST_PORT}`);
});
