class Company {
  constructor(company) {
    this.id = company.id;
    this.name = company.name;
    this.revenue = company.revenue;
    this.value = company.value;
    this.publicshares = company.publicshares;
    this.category = company.category;
    this.shareval = company.shareval;
    this.type = company.type;
    this.registered = new Location(company.registered);
    this.listed = company.listed;
  }
}

class Company_Login {
  constructor(clogin) {
    this.id = clogin.id;
    this.username = clogin.username;
    this.password = clogin.password;
  }
}

export { Company_Login, Company };
