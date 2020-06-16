const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

//Criação de transações e recalculo do saldo
function createTransaction(transaction) {
  user.transactions.push(transaction)

  if(transaction.type === "credit")
    user.balance += transaction.value;
  else if (transaction.type === "debit")
    user.balance -= transaction.value;
}

//Maior valor por tipo de transação
function getHigherTransactionByType(typeTransation) {
  let value = 0;

  for(let transaction of user.transactions){
    if(transaction.type === typeTransation) {
      if(value < transaction.value){
        value = transaction.value
      }
    }
  }

  return {type: typeTransation, value}
}

//Média do valor das transações sem considerar o tipo
function getAverageTransactionValue() {
  let sum = 0

  for(let transaction of user.transactions) {
    sum += transaction.value
  }

  const media = sum / user.transactions.length

  return media
}

//Número de transações por tipo
function getTransactionsCount() {
  let credit = 0
  let debit = 0

  for(let transaction of user.transactions) {
    if(transaction.type === "credit")
      credit += 1
    else if(transaction.type === "debit")
      debit += 1
  }

  return {credit, debit}
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(`Balance: ${user.balance}`);

console.log(`Credit transaction with higher value: ${getHigherTransactionByType("credit").value}`)
console.log(`Debit transaction with higher value: ${getHigherTransactionByType("debit").value}`)

console.log(`Average transactions: ${getAverageTransactionValue()}`);

console.log(`Number of credits: ${getTransactionsCount().credit}`);
console.log(`Number of debits: ${getTransactionsCount().debit}`);