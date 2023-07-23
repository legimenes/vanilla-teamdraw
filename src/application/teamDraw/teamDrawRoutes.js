const TeamDrawUseCase = require('./teamDrawUseCase');

const routes = async (request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const url = request.url;
    const httpMethod = request.method;

    if (url.startsWith('/teamDraw')) {
        if (httpMethod === 'POST') {
            if (url === "/teamDraw") {
                let body = '';
                request.on("data", async (chunk) => {
                    body += chunk.toString();
                });
                request.on("end", async () => {
                    const drawRequest = JSON.parse(body);
                    const responseData = await TeamDrawUseCase.execute(drawRequest.totalPlayersPerTeam, drawRequest.playerIds);
                    response.end(JSON.stringify(responseData));
                });
            }
        }
        else {
            response.statusCode = 404;
            response.end('Route not found');
        }
    }
};

module.exports = routes;
