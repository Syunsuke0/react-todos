import "./App.css";
import { CssBaseline } from "@mui/material";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </div>
  );
};

export default App;
