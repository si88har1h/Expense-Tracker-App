import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Snacks",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const ExpenseDataCollectionHandler = (expenseData) => {
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onExpenseDataCollection={ExpenseDataCollectionHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
