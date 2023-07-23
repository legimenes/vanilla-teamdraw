const PlayerRepository = require('./playerRepository');

class DeletePlayersUseCase {
    async execute (playerId) {
        const result = await PlayerRepository.delete(playerId);
        return result > 0;
    }
}

module.exports = new DeletePlayersUseCase();
