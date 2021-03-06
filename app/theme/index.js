import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#0047b3'
    },
    secondary: {
      main: '#0052cc'
    },
    type: 'dark',
    background: {
      default: '#001433'
    }
  }
})

export default theme
