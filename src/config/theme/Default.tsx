import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F0141E',
    },
    secondary: {
      main: '#202020',
    },
  },
  //   components: {
  //     // Name of the component
  //     MuiPaper: {
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           // Some CSS
  //           padding: "20px",
  //           borderRadius: "10px",
  //         },
  //       },
  //     },
  //   },
});

export default defaultTheme;
