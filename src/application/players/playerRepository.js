const connection = require("../../infra/database/dbConnection");

class PlayerRepository {
    async get() {
        const query = 'SELECT * FROM players'
        try {
          return await connection.any(query);
        } catch (error) {
          throw error;
        }
    }

    async getById(playerId) {
		const query = 'SELECT * FROM players WHERE id = $1'
		const paramValues = [playerId];
      	try {
			return await connection.oneOrNone(query, paramValues);
      	} catch (error) {
        	throw error;
		}
	}

    async insert(player) {
		const query = 'INSERT INTO players (name, level) VALUES ($1, $2) RETURNING id'
		const paramValues = [player.name, player.level];
      	try {
			const result = await connection.one(query, paramValues);
			return result.id;
      	} catch (error) {
        	throw error;
		}
	}

	async update(player) {
		const query = 'UPDATE players SET name = $1, level = $2 WHERE id = $3'
		const paramValues = [player.name, player.level, player.id];
      	try {
			const result = await connection.result(query, paramValues);
			return result.rowCount;
      	} catch (error) {
        	throw error;
		}
	}

	async delete(playerId) {
		const query = 'DELETE FROM players WHERE id = $1'
		const paramValues = [playerId];
      	try {
			const {rowCount} = await connection.result(query, paramValues);
			return rowCount;
      	} catch (error) {
        	throw error;
		}
	}
}

module.exports = new PlayerRepository();
//module.exports = PlayerRepository;
