# Vanilla nodejs team draw API

This is a ***vanilla*** nodejs API for a team draw application that forms balanced teams according to the level of available players.

The idea of ​​this vanilla api is to build it using only nodejs core without any framework.

Preloading is being used to load env files (any we want) without changing the application code.

## npm

```
npm init -y
```
```
npm install pg-promise jest
```
```
npm uninstall dotenv --save-dev
```
```
npm install nodemon --save-dev
```

## Run app in dev

Outside src folder:
```
npm run start-dev
```

## Test app

```
npx jest
```

## Endpoints cURL examples

### Get all players

```
curl --location --request GET 'localhost:8800/players'
```

### Get player by Id

```
curl --location --request GET 'localhost:8800/players/1'
```

### Create a player

```
curl --location --request POST 'localhost:8800/players' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Blabla",
    "level": 2
}'
```

### Update a player

```
curl --location --request PUT 'localhost:8800/players/9' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Blablabla",
    "level": 3
}'
```

### Delete a player

```
curl --location --request DELETE 'localhost:8800/players/11'
```

### Draw teams

```
curl --location --request POST 'localhost:8800/teamDraw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "totalPlayersPerTeam": 3,
    "playerIds": [1, 2, 4, 5, 6, 9, 10]
}'
```
