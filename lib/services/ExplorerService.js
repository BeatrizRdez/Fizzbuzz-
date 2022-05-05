class ExplorerService {

    static filterByMission(explorers, mission) {
      const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
      console.log(explorersByMission)
      return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {
      const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
      return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
      const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
      const explorersGit = explorersByMission.map((nameExplorer) => nameExplorer.githubUsername);
      return explorersGit;
    }

}

module.exports = ExplorerService