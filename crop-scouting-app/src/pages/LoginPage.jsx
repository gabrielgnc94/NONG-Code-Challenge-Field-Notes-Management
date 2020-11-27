import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    flexDirection: "column",
  },
  textFields: {
    marginBottom: theme.spacing(2),
  },
  loginBox: {
    boxShadow: `0 5px 10px -2px ${theme.palette.secondary.light}`,
    padding: "2em 1em",
    borderRadius: "0.5em",
    backgroundColor: theme.palette.background.paper,
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Box component="div" className={classes.loginBox}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form}>
          <TextField
            name="user"
            autoComplete="user"
            label="Usuario"
            autoFocus
            fullWidth
            id="user"
            className={classes.textFields}
          />
          <TextField
            name="password"
            type="password"
            autoComplete="current-password"
            label="Senha"
            fullWidth
            id="password"
            className={classes.textFields}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Lembrar"
          />

          <Button type="submit" fullWidth variant="contained" color="secondary">
            Entrar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
