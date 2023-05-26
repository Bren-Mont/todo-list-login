import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Input } from "../components/commons/Input";
import { useState } from "react";
import { validateEmail, validatePassword } from "../share/validations";
import { setEmailStore, signIn, store } from "../share/redux/store";
import Copyright from "../components/copyright";
import { useEffect } from "react";
import { USERS } from "../share/constants/users";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({});

export default function SignIn() {
  const navigate = useNavigate();
  const [disabledBtn, setDisableBtn] = useState(true);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    isUserValid: true,
  });

  const onBlurEmail = (e) => {
    const { value } = e.target;
    const emailError = validateEmail(value);
    setErrors((previous) => ({
      ...previous,
      email: emailError,
    }));
  };

  const onBlurPassword = (e) => {
    const { value } = e.target;
    const passwordError = validatePassword(value);
    setErrors((previous) => ({
      ...previous,
      password: passwordError,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password");
    const user = USERS.find((user) => user.email === data.get("email"));

    setErrors((previous) => ({
      ...previous,
      isUserValid: true,
    }));

    if (user?.password === password) {
      store.dispatch(setEmailStore(user.email));
      store.dispatch(signIn(user.token));
      localStorage.setItem("token", user.token);
      localStorage.setItem("email", user.email);
      navigate("/");
      return;
    }

    setErrors((previous) => ({
      ...previous,
      isUserValid: false,
    }));
  };

  useEffect(() => {
    setDisableBtn(Boolean(errors?.email || errors?.password));
  }, [errors]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Input
              autoFocus
              id="email"
              name="email"
              label="Email Address"
              autoComplete="email"
              error={errors?.email}
              helperText={errors?.email}
              onBlur={onBlurEmail}
            />
            {}
            <Input
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={errors?.password}
              helperText={errors?.password}
              onBlur={onBlurPassword}
            />
            {!errors.isUserValid ? (
              <Alert severity="warning" color="error">
                Email y contraseña invalida
              </Alert>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={disabledBtn}
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿No tienes una cuenta? Registrate aqui"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
