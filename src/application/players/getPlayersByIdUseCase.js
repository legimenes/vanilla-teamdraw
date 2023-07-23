const PlayerRepository = require('./playerRepository');

class GetPlayersByIdUseCase {
    async execute (playerId) {
        const players = await PlayerRepository.getById(playerId);
        return players;
    }
}

module.exports = new GetPlayersByIdUseCase();
