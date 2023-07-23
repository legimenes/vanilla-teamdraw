const GetPlayersUseCase = require('./application/players/getPlayersUseCase');

/*
const PlayerRepository = require('./application/players/playerRepository');
//const repo = new PlayerRepository();

(async() => {
    await PlayerRepository.get()
        .then(users => {
            console.log(users);
        })
        .catch(error => {
            console.error(error);
        });
})();
*/


(async() => {
    await GetPlayersUseCase.execute()
        .then(users => {
            console.log(users);
        })
        .catch(error => {
            console.error(error);
        });
})();
