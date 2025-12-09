import CssBaseline from "@mui/material/CssBaseline";
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
