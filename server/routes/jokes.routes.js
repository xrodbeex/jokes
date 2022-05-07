const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes', JokeController.createNewJoke);
    app.put('/api/jokes/:id', JokeController.getJokeById);
    app.post('/api/jokes/:_id', JokeController.updateJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteJoke);
}