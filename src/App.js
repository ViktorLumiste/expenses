import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

import Expenses  from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const DUMMY_EXPENSES = [
    {
        id:"e1",
        date: new Date(2023, 0, 10),
        title: 'New book',
        price: 30.99
    },
    {
        id:"e2",
        date: new Date(2023, 0, 10),
        title: 'New Jeans',
        price: 99.99
    }
]

const App = () => {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (expense) =>{
        console.log('In App.js')
        setExpenses((previousExpenses )=>{
            return [expense,...expenses]
        })
    }
    const filterExpenseHandler = (filter) =>{
        console.log('Filter Data in App.js', filter)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <ExpensesFilter onFilterChange={filterExpenseHandler}></ExpensesFilter>
            <Expenses expenseData={DUMMY_EXPENSES[0]}></Expenses>
            <Expenses expenseData={DUMMY_EXPENSES[1]}></Expenses>
        </div>
    );

}
export default App;
