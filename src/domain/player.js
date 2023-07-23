class Player {
    constructor(id, name, level) {
        this.id = id;
        this.name = name;
        this.level = level;
    }

    static sortByMaximumLevel(players) {
        function maximumLevelComparator(a, b) {
            return parseInt(b.level) - parseInt(a.level);
        }
        players = players.sort(maximumLevelComparator);
    }

    static sortByNameAscending(players) {
        players.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) {
                return -1;
            }
            
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
    }
}

module.exports = Player;
