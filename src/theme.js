import { responsiveFontSizes, createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
