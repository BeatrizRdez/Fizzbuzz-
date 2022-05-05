const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Test para ExplorerService", () => {
    test("1: Explorers in Node", () => {
     const explorers = [{ mission: "node" }];
     const explorersInNode = ExplorerService.filterByMission(explorers, "node");
     expect(explorersInNode.length).toBe(1);
    });

    test("2: Filter by mission", () => {
        const explorers = [{ mission: "node" }];
        const filterExplorer = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(filterExplorer.length).toBe();
    });

    test("3: Get username", () => {
        const explorers = [{ mission: "node" }];
        const nameExplorer = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(nameExplorer.length).toBe(1);
    });

    
}); 