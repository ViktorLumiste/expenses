import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import { flushSync } from 'react-dom';

import Expenses  from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const DUMMY_EXPENSES = [
    {
        id:"e1",
        date: new Date(2024, 0, 10),
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
        const filteredExpenses = DUMMY_EXPENSES.filter(
            (expense) => expense.date.getFullYear() == filter
        );
        setExpenses([...filteredExpenses])
        console.log('filter',...filteredExpenses)
        console.log('inside',expenses)
        console.log('Dummy',DUMMY_EXPENSES)
    }
    console.log('outside',expenses)
    console.log('inside1',expenses[0])
    console.log('inside2',expenses[0].date)
    console.log('inside2',expenses[0].date.toLocaleString('en-US',{day:'2-digit'}))
    return (
        <>
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <ExpensesFilter onFilterChange={filterExpenseHandler}></ExpensesFilter>
            <Expenses expenseData={expenses[0]}></Expenses>
            <Expenses expenseData={expenses[1]}></Expenses>
        </div>
        </>
    );


}
export default App;
