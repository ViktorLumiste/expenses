import React, {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) =>{
    const [formShow, setFormShow] = useState(false)
    const [buttonShow, setButtonShow] = useState(true)
    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    const showForm = () =>{
        if (formShow === true) {
            setFormShow(false)
            setEnteredTitle('')
            setEnteredAmount('')
            setEnteredDate('')
            showButton()
        } else if (formShow === false) {
            setFormShow(true)
            setEnteredTitle('')
            setEnteredAmount('')
            setEnteredDate('')
            showButton()
        }
    }
    const showButton = () =>{
        if (buttonShow === true) {
            setButtonShow(false)
        } else if (buttonShow === false) {
            setButtonShow(true)
        }
    }



    return(
        <div>
        {buttonShow ?(
        <button  onClick={showForm}>Add New Expense</button>
        ):null
        }
        { formShow ?(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>

                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions" style={{display:"inline-block"}}>
                <button type="submit">Add Expense</button>
            </div>
            <div className="new-expense__actions" style={{display:"inline-block"}}>
                <button onClick={showForm}>Cancel</button>
            </div>
        </form>

        ):null
        }
        </div>

)
}
export default ExpenseForm