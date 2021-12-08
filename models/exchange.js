import Location from "./location";

class Exchange {
  constructor(exchange) {
    this.currency = exchange.currency;
    this.name = exchange.name;
    this.code = exchange.code;
    this.marketcap = exchange.marketcap;
    this.listings = exchange.listings;
    this.location = new Location(exchange.location);
  }
}

class Exchange_Login {
  constructor(login) {
    this.username = login.username;
    this.password = login.password;
  }
}

export default Exchange;
