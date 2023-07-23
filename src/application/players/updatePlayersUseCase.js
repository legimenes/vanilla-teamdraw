const PlayerRepository = require('./playerRepository');

class UpdatePlayersUseCase {
    async execute (player) {
        const result = await PlayerRepository.update(player);
        return result > 0;
    }
}

module.exports = new UpdatePlayersUseCase();
