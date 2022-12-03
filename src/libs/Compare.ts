const Compare = {
  result(computerNumbers: string, playerNumbers: string) {
    const { ball, strike } = this.computerNumbersWithPlayerNumbers(
      computerNumbers,
      playerNumbers
    );

    return `${ball}볼 ${strike}스크라이크`;
  },

  computerNumbersWithPlayerNumbers(
    computerNumbers: string,
    playerNumbers: string
  ) {
    let ball = 0;
    let strike = 0;

    const computerNumbersArray = computerNumbers.split('');

    computerNumbersArray.forEach((computerNumber, idx) => {
      if (!computerNumbersArray.includes(playerNumbers[idx])) return;
      if (computerNumber === playerNumbers[idx]) return (strike += 1);
      ball += 1;
    });

    return { ball, strike };
  },
};

export default Compare;
