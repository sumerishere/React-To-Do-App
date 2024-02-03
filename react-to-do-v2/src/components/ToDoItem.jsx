// eslint-disable-next-line react/prop-types
function ToDoItem({todoName,todoDate}) {

  // let todoName = "Buy milk";
  // let todoDate = "4/01/24";

  return (
    <div className="container ">
      <div className="row item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
