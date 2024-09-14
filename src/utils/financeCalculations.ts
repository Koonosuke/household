import { Balance, Transaction } from "../types";

//他のコンポーネントでもこの計算式はよく使うので、どうせたなら型を作っておこう

export function financeCalculations(transactions: Transaction[]): Balance {
  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "income") {
        acc.income += transaction.amount; //accは全体income,expenseなど
      } else {
        acc.expense += transaction.amount;
      }
      acc.balance = acc.income - acc.expense;
      return acc;
    },
    { income: 0, expense: 0, balance: 0 }
  );
}
