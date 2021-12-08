class Investments {
  constructor(investor) {
    this.name = investor.name;
    this.id = investor.id;
  }
}

class Investor {
  constructor() {
    this.investment = new Investments();
  }
}
