import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="outlined" size="large" >
          Enviar
        </Button>
      </div>
      
    </Box>
  );
}