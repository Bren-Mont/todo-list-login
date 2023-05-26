import { Input } from "../commons/Input";
import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { Box, Grid } from "@mui/material";
import { setTodos, store } from "../../share/redux/store";

const AddTodo = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const todo = data.get("todoList");
    const { todos } = store.getState();

    store.dispatch(
      setTodos([...todos, { id: todos.length + 1, description: todo }])
    );
  };
  return (
    <div>
      <h2>Lista de tareas</h2>

      <Grid
        container
        spacing={1}
        direction='row'
        justifyContent='center'
        alignItems='center'
        component='form'
        onSubmit={handleSubmit}
        noValidate
      >
        <Grid item xs={8}>
          <Input
            autoFocus
            id='todoList'
            name='todoList'
            placeholder='Escribe tu tarea'
            autoComplete='false'
            className={"todoList"}
            size='small'
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant='contained'
            type='submit'
            endIcon={<AddIcon />}
            fullWidth
          >
            Agregar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddTodo;
