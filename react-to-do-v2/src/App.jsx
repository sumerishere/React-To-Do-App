import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddRow";
import AppName from "./components/AppName";
import TodoContainer from "./components/TodoContainer";

function App() {
  const toDoItemsArr = [
    {
      name: "buy milk",
      dueDate: "3/3/24",
    },
    {
      name: "College mt Jaa Bhaii",
      dueDate: "4/1/23",
    },
    {
      name: "chalo bhai bye",
      dueDate: "12/2/24",
    },
  ];

  const [toDoItems, settodoItems] = useState(toDoItemsArr);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newToDoItems = [
      ...toDoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    settodoItems(newToDoItems);
  };

  return (
    <>
      <center className="to-do-container">
        <AppName />
        <AddToDo onNewItem={handleNewItem}></AddToDo>
        <TodoContainer toDoItems={toDoItemsArr}></TodoContainer>
      </center>
    </>
  );
}

export default App;
