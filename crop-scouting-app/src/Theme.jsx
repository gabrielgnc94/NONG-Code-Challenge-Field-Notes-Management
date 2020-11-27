import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[200],
    },
    secondary: {
      main: lightGreen[900],
    },
  },
});

const MyTheme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MyTheme;
