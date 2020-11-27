import {
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
    height: "80vh",
    flexDirection: "column",
  },
  textFields: {
    marginBottom: theme.spacing(2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
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
          control={<Checkbox value="remember" color="primary" />}
          label="Lembrar"
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
