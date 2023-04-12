import logo from './logo.svg';
import './App.css';

import Expenses  from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 10),
            title: 'New Jeans',
            price: 99.99
        }
    ]

    const addExpenseHandler = (expense) =>{
        console.log('In App.js')
        console.log(expense)
    }
    const filterExpenseHandler = (filter) =>{
        console.log('Filter Data in App.js', filter)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <ExpensesFilter onFilterChange={filterExpenseHandler}></ExpensesFilter>
            <Expenses expenseData={expenses[0]}></Expenses>
            <Expenses expenseData={expenses[1]}></Expenses>
        </div>
    );

}
export default App;
