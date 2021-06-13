import { createMuiTheme } from '@material-ui/core'
// import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#15202B',
      dark: '#15202B',
      contrastText: '#fff',
    },
    background: {
      default: '#15202B',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    type: 'dark',
  },
})

export default theme
