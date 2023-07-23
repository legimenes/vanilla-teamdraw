const connection = require("../../infra/database/dbConnection");

class TeamDrawRepository {
	async getPlayersByIds(playerIds) {
		const query = `SELECT * FROM players WHERE id IN ($1:csv)`;
		const paramValues = [playerIds];
		try {
			return await connection.any(query, paramValues);
      	} catch (error) {
        	throw error;
		}
	}
}

module.exports = new TeamDrawRepository();
