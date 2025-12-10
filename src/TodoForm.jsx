import { Create } from "@mui/icons-material";
import { IconButton, InputAdornment, ListItem, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          value={text}
          label="Outlined"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton type="submit" aria-label="create todo" edge="end">
                    <Create />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </form>
    </ListItem>
  );
};

export default TodoForm;
