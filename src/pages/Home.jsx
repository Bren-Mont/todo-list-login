import React from "react";
import { useValidateAuthUser } from "../share/hooks/useValidateAuthUser";
import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Link as LinkMui,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { signOut, store } from "../share/redux/store";
import { useNavigate } from "react-router-dom";

import ListTodo from "./../components/todo/ListTodo";
import AddTodo from "./../components/todo/AddTodo";

const Home = () => {
  useValidateAuthUser();
 const navigate = useNavigate()
 const { email } = store.getState();
  return (
    <Container>
      <Grid
        container
        direction='row'
        justifyContent='flex-end'
        alignItems='flex-end'
      >
        <Grid item xs={1} paddingTop={2}>
          <ButtonGroup variant='outlined' aria-label='outlined button group'>
            <Button>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>{email.charAt(0)}</Avatar>
            </Button>
            <Button>
              <LinkMui
                component='button'
                variant='body2'
                onClick={() => {
                  store.dispatch(signOut())
                  navigate('/login')
                }}
              >
                Cerrar sesión
              </LinkMui>
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={1} paddingTop={2}></Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item xs={12} xOff>
          <AddTodo />
        </Grid>
        <ListTodo/>
        
      </Grid>
    </Container>
  );
};

export default Home;
