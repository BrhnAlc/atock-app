
import './App.css'
import AppRouter from './router/AppRouter';
import store from './app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import { createTheme } from '@mui/material';
import { blueGrey , grey} from '@mui/material/colors';


function App() {
  const theme =createTheme({
    palette:{
      primary:{
        main: grey["900"],
      },
      secondary:{
        main:blueGrey["900"],
      }
    }
  })
  

  return (
    <>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <AppRouter/>
      
    </Provider>
    <ToastContainer/>
    </ThemeProvider>
    </>
  
  )
}

export default App
