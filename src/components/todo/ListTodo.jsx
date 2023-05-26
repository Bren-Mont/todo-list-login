import * as React from "react";
import {  useGridApiRef } from "@mui/x-data-grid-pro";
import { setTodos, store } from "../../share/redux/store";
import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


export default function ListTodo() {
  const [checked, setChecked] = React.useState([0]);
  const [data, setData] = React.useState([]);

  const apiRef = useGridApiRef();

  store.subscribe(() => {
    const { todos } = store.getState();
    setData(todos);
  });
  const handleDeleteRow = (id) => {
    const { todos } = store.getState();
    const data = [...todos];
    const index = data.findIndex((item) => item.id === id);
    data.splice(index, 1);
    store.dispatch(setTodos(data));
    apiRef?.current?.updateRows?.(data);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {data.map((todo) => {
          const labelId = `checkbox-list-label-${todo.description}`;

          return (
            
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton edge='end' aria-label='comments'>
                  <Button endIcon={<DeleteIcon />} size='small' onClick={() => handleDeleteRow(todo.id)}>
                    
                  </Button>
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(todo.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checked.indexOf(todo.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.description} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
