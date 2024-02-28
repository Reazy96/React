import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const data = [
  { todo: "Buy Grocerys" },
  { todo: "Send Email" },
  { todo: "Finish Assignment" },
  { todo: "Write Blog" },
  { todo: "Bake Cake" },
];

const TodoList = () => {
  return (
    <section>
      <ul>
        {data.map((singeItems) => (
          <TodoItem item={singeItems.todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
// * 1. Die Komponenete aufrufen so oft wie nötig
// * 2. ich deklariere "item" und geben ihn den Wert vom jeden Index des Paketes.

// * 3. jetzt gehe ich auf die TodoItem Komponente und übergebe mit     (props) mein "item" in die TodoList Komponenete.
