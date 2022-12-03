const ComputerNumbers = {
  save() {
    const numbers = ComputerNumbers.create();

    localStorage.setItem('computerNumbers', numbers);
  },

  create() {
    let numbers: number[] = [];

    while (numbers.length !== 4) {
      const number = ComputerNumbers.createRandomNumber();

      if (!numbers.includes(number)) numbers.push(number);
    }

    return numbers.join('');
  },

  createRandomNumber() {
    const number = Math.floor(Math.random() * 9) + 1;

    return number;
  },

  get() {
    return localStorage.getItem('computerNumbers');
  },
};

export default ComputerNumbers;
