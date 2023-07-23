const TeamDraw = require('../../domain/teamDraw');
const TeamDrawRepository = require('./teamDrawRepository');

class TeamDrawUseCase {
    async execute (totalPlayersPerTeam, playerIds) {
        let players = [];
        players = await TeamDrawRepository.getPlayersByIds(playerIds);

        const draw = TeamDraw.draw(players, totalPlayersPerTeam);
        return draw;
    }
}

module.exports = new TeamDrawUseCase();
