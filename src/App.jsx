import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodoList";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <TodoList />
    </div>
  );
};

export default App;
