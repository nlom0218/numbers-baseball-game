const ValidationNumbers = (numbers: string) => {
  if (!/^[0-9]+$/.test(numbers)) return { errMsg: '숫자만 입력가능합니다.' };

  if (numbers.includes('0')) return { errMsg: '0은 입력할 수 없습니다.' };

  if (new Set(numbers.split('')).size !== 4)
    return { errMsg: '중복된 숫자는 입력할 수 없습니다.' };

  return { errMsg: undefined };
};

export default ValidationNumbers;
