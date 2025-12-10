import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const initialTodos = [
  { id: 1, text: "とらじろうの散歩", completed: false },
  { id: 1, text: "ねこの散歩", completed: false },
  { id: 1, text: "うしの散歩", completed: true },
  { id: 1, text: "うまの散歩", completed: false },
  { id: 1, text: "ドラゴンの散歩", completed: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          remove={removeTodo}
          toggleTodo={() => toggleTodo(todo.id)}
        />
      ))}
      <TodoForm />
    </List>
  );
};

export default TodoList;
