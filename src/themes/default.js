import { createMuiTheme } from "@material-ui/core/styles";
import theme from "../styles/theme";

export default createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.secondary,
      contrastText: theme.colors.wuite,
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {},
});
