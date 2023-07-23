const ArrayExtensions = require("./core/extensions/arrayExtensions");

class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.players = []; 
    }

    addPlayer(player) {
        this.players.push(player);
    }

    getTotalLevel() {
        return this.players.reduce((previous, current) => previous + current.level, 0);
    }

    getTotalPlayers() {
        return this.players.length;
    }

    static sortByMinimumLevel(teams) {
        function minimumLevelComparator(a, b) {
            return parseInt(a.getTotalLevel()) - parseInt(b.getTotalLevel());
        }
        teams = teams.sort(minimumLevelComparator);
    }

    static sortByMinimumTotalPlayers(teams) {
        function minimumTotalPlayersComparator(a, b) {
            return parseInt(a.getTotalPlayers()) - parseInt(b.getTotalPlayers());
        }
        teams = teams.sort(minimumTotalPlayersComparator);
    }
}

module.exports = Team;
