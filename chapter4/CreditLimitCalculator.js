class LimitCalculator{
    _accountNumber;
    _beginningBalance;
    _totalItems;
    _totalOfCredits;
    _creditLimit;
   get getAccountNumber(){
       return this._accountNumber;
   }

   // set setAccountNumber(accountNumber){
   //     this._accountNumber = accountNumber;
   // }

   get getBeginningBalance(){
       return this._beginningBalance;
   }

   set setBeginningBalance(beginningBalance){
       this._beginningBalance = beginningBalance;
   }

   get getTotalItems(){
       return this._totalItems;
   }

   set setTotalItems(totalItems){
       this._totalItems = totalItems;
   }

   get getTotalOfCredits(){
       return this._totalOfCredits;
   }

   set setTotalOfCredits(totalOfItems){
       return this._totalOfCredits = totalOfItems;
   }

   get getCreditLimit(){
       return this._creditLimit;
   }

   set setCreditLimit(creditLimit) {
       return this._creditLimit = creditLimit;
   }


    calculateNewBalance = () =>{
        let newBalance = this.getBeginningBalance() + this.getTotalItems() - this.getTotalOfCredits();

        this.displayMessage(newBalance);
        return newBalance;
    }

    displayMessage(newBalance) {
        if (newBalance > this.getCreditLimit){
            console.log("Credit limit exceeded");
        }
    }


    setAccountNumber(accountNumber) {
       return this._accountNumber = accountNumber;

    }
}