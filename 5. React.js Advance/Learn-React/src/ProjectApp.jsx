import { TodoApp } from "./Projects/ToDoList/Todo";
import { ToggleSwitchButton } from "./Projects/ToggleSwitch/ToggleSwitchComponent";
import "./Projects/ToDoList/Todo.css";

export default function ProjectApp() {
  return (
    <div>
      {/* <ToggleSwitchButton /> */}
      <TodoApp />
    </div>
  );
}
