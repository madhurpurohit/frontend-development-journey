// import { TodoApp } from "./Projects/ToDoList/Todo";
// import { ToggleSwitchButton } from "./Projects/ToggleSwitch/ToggleSwitchComponent";
// import "./Projects/ToDoList/Todo.css";

import {
  ThemeProvider,
  ToggleTheme,
} from "./Projects/ToggleSwitchUsingHook/DarkLightThemeToggle";

export default function ProjectApp() {
  return (
    // <div>
    //   {/* <ToggleSwitchButton /> */}
    //   {/* <TodoApp /> */}
    // </div>
    <ThemeProvider>
      <ToggleTheme />
    </ThemeProvider>
  );
}
