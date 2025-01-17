import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [filterInfoText, setFilterInfoText] = useState("2019,2021 &2022");
  // let filterInfoText = "2019,2021 && 2022";

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020,2021 & 2022";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019,2020 & 2022";
  // } else {
  //   filterInfoText = "2019,2020 & 2021";
  // }
  
  const filterChangeHandlerInput = (selectedYear) => {
    setFilteredYear(selectedYear);

  };
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  })
  // return (
  //   <Card className="expenses">
  //     <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandlerInput}/>
  //     {filteredExpenses.length===0 && <p>No Expenses Found</p>}
  //     {filteredExpenses.length>0 && filteredExpenses.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
  //   </Card>
  // );
  return(
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandlerInput}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
};

export default Expenses;
