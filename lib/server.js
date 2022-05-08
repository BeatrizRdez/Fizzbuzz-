const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Hello World!"});
});

app.get('/v1/explorers/node', (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);  
}

app.get('/v1/explorers/usernames/node', (request, request) => {
    const mission = request.params.mission;
    const explorersUsername = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: mission, userNames: amountInMssion});
});

app.get('/v1/explorers/amount/node', (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: mission, quantity: explorersAmountInMission});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
}))