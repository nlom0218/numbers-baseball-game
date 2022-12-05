interface ITeams {
  teamName: string;
  score: number;
}

const Team = {
  isExist() {
    return Boolean(localStorage.getItem('team'));
  },

  validationCount(count: string) {
    if (!/^[0-9]+$/.test(count)) return { errMsg: '숫자만 입력가능합니다.' };

    if (Number(count) < 3)
      return { errMsg: '3보다 작은 수를 입력할 수 없습니다.' };

    if (Number(count) > 9)
      return { errMsg: '9보다 큰 수를 입력할 수 없습니다.' };

    return { errMsg: undefined };
  },

  save(data: any) {
    const teamNames = Object.values(data);

    const teamInfo = teamNames.map((teamName) => {
      return { teamName, score: 0 };
    });

    localStorage.setItem('team', JSON.stringify(teamInfo));
  },

  get() {
    return JSON.parse(localStorage.getItem('team') as string);
  },

  reset() {
    localStorage.removeItem('team');
  },

  mixRandom(teams: Array<ITeams>) {
    const newTeams = [];
    while (teams.length > 0) {
      const number = Math.floor(Math.random() * teams.length);
      newTeams.push(teams[number]);
      teams = teams.filter((_, idx) => idx !== number);
    }

    return newTeams;
  },
};

export default Team;
