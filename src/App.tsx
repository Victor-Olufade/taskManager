import React, {FC, ReactElement} from 'react';
import {ThemeProvider, CssBaseline} from '@mui/material';
import { customTheme } from './theme/customTheme';
import Dashboard from './pages/dashboard/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




const queryClient = new QueryClient();

// ReactElement is what gets returned from React Components.

const App: FC = (): ReactElement => {
  return(
  <>
  <QueryClientProvider client={queryClient}>
    <ToastContainer/>
  <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <Dashboard/>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider> 
  </>
  )
};

export default App;
