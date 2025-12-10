import { Create } from "@mui/icons-material";
import { IconButton, InputAdornment, ListItem, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <ListItem>
      <form>
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
                  <IconButton aria-label="create todo" edge="end">
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
