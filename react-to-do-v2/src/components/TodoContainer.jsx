import ToDoItem from "./ToDoItem";
import styles from "./TodoContainer.module.css";
// eslint-disable-next-line no-unused-vars
const toDoList = ({ toDoItems }) => {
  return (
    <div className={styles['item-container']}>
      <hr></hr>

      {toDoItems.map(i => <ToDoItem key={i} todoName={i.name} todoDate={i.dueDate}></ToDoItem>)} 

      {/* <ToDoItem todoName="zebrish" todoDate="2/03/23"></ToDoItem>
      <ToDoItem todoName="College mt Jaa Bhaii" todoDate="0/01/24"></ToDoItem>
      <ToDoItem todoName="kuch toh krle" todoDate="0/02/24"></ToDoItem> */}
    </div>
  );
};

export default toDoList;
