import './Expenses.css'
import ExpenseItem  from "./ExpenseItem";
function Expenses(props){
    return (
        <div className="expenses">
            <ExpenseItem expenseData={props}></ExpenseItem>
        </div>
    )
}
export default Expenses