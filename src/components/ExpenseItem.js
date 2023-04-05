import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props){



    return (
        <div className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2></h2>
            </div>
        </div>
    )
}

export default ExpenseItem