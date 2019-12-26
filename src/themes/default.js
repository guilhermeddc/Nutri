import { createMuiTheme } from '@material-ui/core/styles';
import colors from '../styles/colors'

export default createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary,
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
  }
})
