import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="outlined" size="large" >
          <Redirect to="/home" />;
        </Button>
      </div>
      
    </Box>
  );
}