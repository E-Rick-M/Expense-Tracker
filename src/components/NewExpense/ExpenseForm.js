import {useState} from 'react'
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')

    // const inputChangeHandler=(identifier,value)=>{
    //     if(identifier==='title'){
    //         setEnteredTitle(value)
    //     }else if(identifier==='date'){
    //         setEnteredDate(value)
    //     }else{
    //         setEnteredAmount(value)
    //     }
    // }

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
   
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
   
    }
    const submitHandler=(event)=>{
        event.preventDefault()

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
            // date:new Date(enteredDate).toLocaleString('en-us',{
            //     day:'numeric',
            //     month:'long',
            //     year:'numeric'
            // })

        }


        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          {/* <input type="text" id="" onChange={(event)=>{inputChangeHandler('title',event.target.value)}}/> */}
          <input type="text" id="" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          {/* <input type="number" id="" min="0.01" step='0.01' onChange={(event)=>{inputChangeHandler('amount',event.target.value)}}/> */}
          <input type="number" id="" min="0.01" step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          {/* <input type="date" id="" min="2024-01-01" max="2025-12-31" onChange={(event)=>{inputChangeHandler('date',event.target.value)}} /> */}
          <input type="date" id="" min="2019-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
