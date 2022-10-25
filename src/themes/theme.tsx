import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorRed, defaultPink, defaultPurple } from './defaultColors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: defaultPurple,
    },
    secondary: {
      main: defaultPink,
    },
  },
});

const ComponentLayout = (props: any) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default ComponentLayout