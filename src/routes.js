const playerRoutes = require("./application/players/playerRoutes");
const teamDrawRoutes = require("./application/teamDraw/teamDrawRoutes");

const routes = (request, response) => {
    playerRoutes(request, response);
    teamDrawRoutes(request, response);
}

module.exports = routes;
