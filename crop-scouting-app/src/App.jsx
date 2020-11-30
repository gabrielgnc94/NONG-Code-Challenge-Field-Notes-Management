import React from "react";

import { CssBaseline, Container } from "@material-ui/core/";
import Routes from "./routes";
import theme from "./theme";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  baseContainer: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container className={classes.baseContainer} maxWidth="xl">
          <Routes />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
