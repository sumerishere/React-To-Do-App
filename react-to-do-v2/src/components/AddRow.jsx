import "../App.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState();

  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddBtnClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName('');
    setDueDate('');
  }

  return (
    <div className="container text-center add-items">
      <div className="row item-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To-do here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
          
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success custom-btn"
            onClick={handleAddBtnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
