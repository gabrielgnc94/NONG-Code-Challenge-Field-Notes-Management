import React from "react";

import { CssBaseline, Container } from "@material-ui/core/";
import Routes from "./routes";
import Theme from "./Theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  baseContainer: { minHeight: "100vh" },
}));
const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Theme>
        <Container className={classes.baseContainer}>
          <Routes />
        </Container>
      </Theme>
    </React.Fragment>
  );
};

export default App;
