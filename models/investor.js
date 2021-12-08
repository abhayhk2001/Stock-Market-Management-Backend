/*
Classes defined:
1.Investor(exported)
2.Investments
3.Investor_Login_Credentials
4.Private_Details
5.Bank_Details
*/

class Investor {
  /*
  Instance variables of this class:
  iid
  firstName
  middleName
  lastName
  phoneNumber
  noOfInvestments
  loginCredentials(separate class)
  privateDetails(separate class)
  investments(separate class)
  */
  constructor(investor) {
    this.iid = investor.iid;
    this.firstName = investor.firstName;
    this.middleName = investor.middleName;
    this.lastName = investor.lastName;
    this.phoneNumber = investor.phoneNumber;
    this.noOfInvestments = investor.noOfInvestments;
    this.loginCredentials = investor.loginCredentials;
    this.privateDetails = new Private_Details(investor.privateDetails);
  }
}

class Investments {
  /*
  instance variables dateOfPurchase, numberOfShares, currentAmount, purchaseAmount, status
  */
  constructor(investments) {
    this.investor = investments.investor;
    this.dateOfPurchase = investments.dateOfPurchase;
    this.numberOfShares = investments.numberOfShares;
    this.currentAmount = investments.currentAmount;
    this.purchaseAmount = investments.purchaseAmount;
    this.status = investments.status;
    this.company = investments.company;
  }
}

class Investor_Login_Credentials {
  /*
  instance variables are userName and password
  */
  constructor(loginCredentials) {
    this.id = loginCredentials.id;
    this.userName = loginCredentials.userName;
    this.password = loginCredentials.password;
  }
}

class Private_Details {
  /*
  Instance variables are aadharNumber, panNumber, bankDetails(separate Class)
  */
  constructor(privateDetails) {
    this.addharNumber = privateDetails.addharNumber;
    this.panNumber = privateDetails.panNumber;
    this.bankDetails = new Bank_Details(privateDetails.bankDetails);
  }
}

class Bank_Details {
  /*
  Instance variables are accountNumber, bankName, ifsc, branch
  */
  constructor(bankDetails) {
    this.accountNumber = bankDetails.accountNumber;
    this.bankName = bankDetails.bankName;
    this.ifsc = bankDetails.ifsc;
    this.branch = bankDetails.branch;
  }
}

export { Investor, Investments, Investor_Login_Credentials };
