import { createMuiTheme } from "@material-ui/core/styles";
import {
  amber,
  blueGrey,
  green,
  lightGreen,
  yellow,
} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: lightGreen[900],
    },
    text: {
      primary: green[900],
      secondary: blueGrey[200],
    },
    background: {
      default: amber[50],
      paper: yellow[100],
    },
  },
});

export default theme;
