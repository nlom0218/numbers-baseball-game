const Team = {
  isExist() {
    return Boolean(localStorage.getItem('team'));
  },

  validationCount(count: string) {
    if (!/^[0-9]+$/.test(count)) return { errMsg: '숫자만 입력가능합니다.' };

    if (Number(count) < 2)
      return { errMsg: '2보다 작은 수를 입력할 수 없습니다.' };

    if (Number(count) > 10)
      return { errMsg: '10보다 큰 수를 입력할 수 없습니다.' };

    return { errMsg: undefined };
  },
};

export default Team;
