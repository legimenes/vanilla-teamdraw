const ArrayExtensions = require("./core/extensions/arrayExtensions");
const MathExtensions = require("./core/extensions/mathExtensions");
const Player = require("./player");
const Team = require("./team");

class TeamDraw {
    static draw(players, totalPlayersPerTeam) {
        this.#validateDrawTeams(players, totalPlayersPerTeam);
        this.#arrangeAndSortPlayersByMaximumLevel(players);
        const teams = this.#createTeams(totalPlayersPerTeam, players.length);

        let drawedTeam;
        players.forEach(player => {
            drawedTeam = this.#draw(teams);
            drawedTeam.addPlayer(player);
        });

        teams.forEach(team => {
            Player.sortByNameAscending(team.players);
        });

        return teams;
    }

    static #arrangeAndSortPlayersByMaximumLevel(players) {
        ArrayExtensions.shuffle(players);
        Player.sortByMaximumLevel(players);
    }

    static #createTeams(totalPlayersPerTeam, totalPlayers) {
        const totalTeams = MathExtensions.divideAndAddOne(totalPlayers, totalPlayersPerTeam);
        const teams = [];
        for (let i = 0; i < totalTeams; i++) {
            teams[i] = new Team(i, `Team ${i + 1}`);
        }

        return teams;
    }

    static #draw(teams) {
        ArrayExtensions.shuffle(teams);
        Team.sortByMinimumTotalPlayers(teams);
        Team.sortByMinimumLevel(teams);

        return teams[0];
    }

    static #validateDrawTeams(players, totalPlayersPerTeam) {
        if (totalPlayersPerTeam <= 1) {
            throw new Error('The minimum total players per team must be greater than 1');
        }
        if (players == null || players.length <= 1) {
            throw new Error('The minimum number of players must be greater than 1');
        }
        if (players.length <= totalPlayersPerTeam) {
            throw new Error('The minimum number of players must be greater than total players per team');            
        }
    }
}

module.exports = TeamDraw;
