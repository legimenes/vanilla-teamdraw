const PlayerRepository = require('./playerRepository');

class CreatePlayersUseCase {
    async execute (player) {
        const result = await PlayerRepository.insert(player);
        return result;
    }
}

module.exports = new CreatePlayersUseCase();
