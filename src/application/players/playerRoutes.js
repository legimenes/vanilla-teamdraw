const GetPlayersUseCase = require('./getPlayersUseCase');
const GetPlayersByIdUseCase = require('./getPlayersByIdUseCase');
const CreatePlayersUseCase = require('./createPlayersUseCase');
const UpdatePlayersUseCase = require('./updatePlayersUseCase');
const DeletePlayersUseCase = require('./deletePlayersUseCase');

const routes = async (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    
    const url = request.url;
    const httpMethod = request.method;

    if (url.startsWith('/players')) {
        if (httpMethod === 'GET') {
            if (url === "/players") {
                const responseData = await GetPlayersUseCase.execute();
                response.end(JSON.stringify(responseData));
            }
            else if (url.startsWith('/players/')) {
                const playerId = parseInt(url.substring(9));
                const responseData = await GetPlayersByIdUseCase.execute(playerId);
                response.end(JSON.stringify(responseData));
            }
        }
        else if (httpMethod === 'POST') {
            if (url === "/players") {
                let body = '';
                request.on("data", async (chunk) => {
                    body += chunk.toString();
                });
                request.on("end", async () => {
                    const playerRequest = JSON.parse(body);
                    const responseData = await CreatePlayersUseCase.execute(playerRequest);
                    response.statusCode = 201;
                    response.end(JSON.stringify(responseData));
                });
            }
        }
        else if (httpMethod === 'PUT') {
            if (url.startsWith('/players/')) {
                const playerId = parseInt(url.substring(9));
                let body = '';
                request.on("data", async (chunk) => {
                    body += chunk.toString();
                });
                request.on("end", async () => {
                    const bodyRequest = JSON.parse(body);
                    const playerRequest = { id: playerId, ...bodyRequest };
                    const responseData = await UpdatePlayersUseCase.execute(playerRequest);
                    response.end(JSON.stringify(responseData));
                });
            }
        }
        else if (httpMethod === 'DELETE') {
            if (url.startsWith('/players/')) {
                const playerId = parseInt(url.substring(9));
                const responseData = await DeletePlayersUseCase.execute(playerId);
                response.end(JSON.stringify(responseData));
            }
        }
        else {
            response.statusCode = 404;
            response.end('Route not found');
        }
    }
};

module.exports = routes;
