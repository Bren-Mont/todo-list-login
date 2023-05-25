import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

export default function ComposedTextField() {
  return (
    <Box 
      style={{display: 'inline-grid'}}
      component='form'
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete='off'
    >
      <h2>Iniciar sesión</h2>
      <FormControl variant='standard'>
        <InputLabel htmlFor='component-simple'>Correo electrónico</InputLabel>
        <Input id='component-simple' />
      </FormControl>
      <FormControl variant='standard'>
        <InputLabel htmlFor='component-simple'>Contraseña</InputLabel>
        <Input id='component-simple' />
      </FormControl>
      {/* <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Contraseña</InputLabel>
        <FilledInput id="component-filled" defaultValue="Composed TextField" />
      </FormControl> */}
    </Box>
  );
}
