const Draw = require("../domain/teamDraw");
const Player = require("../domain/player");
const MathExtensions = require("../domain/core/extensions/mathExtensions");

describe('Given a draw with the requested total players per team is 1', () => {
    test('Then must throw Error', () => {
        let players = [];

        const totalPlayersPerTeam = 1;

        expect(() => {
            Draw.draw(players, totalPlayersPerTeam);
        }).toThrow(new Error('The minimum total players per team must be greater than 1'));
    });
});

describe('Given a draw with the requested total players per team is 2', () => {
    describe('When the total number of players is null', () => {
        test('Then must throw Error', () => {
            let players;

            const totalPlayersPerTeam = 2;

            expect(() => {
                Draw.draw(players, totalPlayersPerTeam);
            }).toThrow(new Error('The minimum number of players must be greater than 1'));
        });
    });

    describe('When the total number of players is 1', () => {
        test('Then must throw Error', () => {
            let players = [];
            players[0] = new Player(1, 'Neymar', 5);

            const totalPlayersPerTeam = 2;

            expect(() => {
                Draw.draw(players, totalPlayersPerTeam);
            }).toThrow(new Error('The minimum number of players must be greater than 1'));
        });
    });

    describe('When the total number of players is 2', () => {
        test('Then must throw Error', () => {
            let players = [];
            players[0] = new Player(1, 'Neymar', 5);
            players[1] = new Player(2, 'Griezmann', 4);

            const totalPlayersPerTeam = 2;

            expect(() => {
                Draw.draw(players, totalPlayersPerTeam);
            }).toThrow(new Error('The minimum number of players must be greater than total players per team'));
        });
    });

    describe('When the total number of players is 3', () => {
        test('Then the expected amount of teams must be equal to the requested parameter' +
             ' and the expected maximum number of players in all teams must be less than or equal to the requested parameter', () => {

            let players = [];
            players[0] = new Player(1, 'Neymar', 5);
            players[1] = new Player(2, 'Griezmann', 4);
            players[2] = new Player(3, 'Messi', 5);

            const totalPlayersPerTeam = 2;

            const teams = Draw.draw(players, totalPlayersPerTeam);
            const totalTeams = MathExtensions.divideAndAddOne(players.length, totalPlayersPerTeam);

            expect(teams.length).toBe(totalTeams);
            expect(teams[0].players.length).toBeLessThanOrEqual(totalPlayersPerTeam);
            expect(teams[1].players.length).toBeLessThanOrEqual(totalPlayersPerTeam);
        });
    });

    describe('When have many players', () => {
        let players = [];
        players[0] = new Player(1, 'Neymar', 5);
        players[1] = new Player(2, 'Griezmann', 4);
        players[2] = new Player(3, 'Messi', 5);
        players[3] = new Player(4, 'Maguire', 2);
        players[4] = new Player(5, 'Cristiano Ronaldo', 5);
        players[5] = new Player(6, 'Hakimi', 3);
        players[6] = new Player(7, 'Karius', 2);
        players[7] = new Player(8, 'Joao Felix', 3);
        players[8] = new Player(9, 'MBappe', 5);
        players[9] = new Player(10, 'Neuer', 5);
        players[10] = new Player(11, 'Havertz', 3);
        players[11] = new Player(12, 'Gundogan', 4);
        
        const totalPlayersPerTeam = 2;

        const teams = Draw.draw(players, totalPlayersPerTeam);
        const totalTeams = MathExtensions.divideAndAddOne(players.length, totalPlayersPerTeam);

        expect(teams.length).toBe(totalTeams);
    });
});
