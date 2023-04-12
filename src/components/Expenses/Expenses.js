import './Expenses.css'
import ExpenseItem  from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) =>{
    return (
        <Card className="expenses">
            <div className="expenses">
                <ExpenseItem expenseData={props}></ExpenseItem>
            </div>
        </Card>
    )
}
export default Expenses