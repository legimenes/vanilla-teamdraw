const PlayerRepository = require('./playerRepository');

class GetPlayersUseCase {
    async execute (/*input: Input*/) {
        const players = await PlayerRepository.get();
        return players;
    }
}

module.exports = new GetPlayersUseCase();
