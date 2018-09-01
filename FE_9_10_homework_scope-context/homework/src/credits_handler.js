// 1)
function userCard(index) {

  let key = index,
    balance = 100,
    transactionLimit = 100,
    historyLogs = [];

  const moneyPrecision = 2;

  function generateHistoryLog(amount, operationType) {

    historyLogs.push({
      operationType,
      credits: amount,
      operationTime: new Date().toLocaleString('en-GB')
    });
  }

  return {
    getCardOptions() {
      return {key, balance: +balance.toFixed(moneyPrecision), transactionLimit, historyLogs};
    },

    putCredits(put) {
      balance += put;
      generateHistoryLog(put, 'Received credits');
    },

    takeCredits(take) {
      balance -= take;
      generateHistoryLog(take, 'Withdrawal of credits');
    },

    setTransactionLimit(newLimit) {
      transactionLimit = newLimit;
      generateHistoryLog(newLimit, 'Transaction limit change');
    },

    transferCredits(amount, recipientsCard) {
      const tax = 0.005;
      const amountWithTax = +(amount * (1 + tax)).toFixed(moneyPrecision);

      if(balance < amountWithTax || transactionLimit < amountWithTax) {
        console.log('transfer break');
        return;
      }

      this.takeCredits(amountWithTax);
      recipientsCard.putCredits(amount);
    }
  }
}

//  2)
class UserAccount {
  constructor(name) {
    this.name,
    this.cards = [],

    this.addCard = () => {
      const maxAmountOfCard = 3;
      if(this.cards.length < maxAmountOfCard) {
        this.cards.push(userCard(this.cards.length + 1));
      }
    },

    this.getCardByKey = (key) => {
      return this.cards[key - 1];
    }
  }
}
