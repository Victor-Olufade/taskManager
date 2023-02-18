import React, {FC, ReactElement} from 'react';
import {ThemeProvider, CssBaseline} from '@mui/material';
import { customTheme } from './theme/customTheme';
import Dashboard from './pages/dashboard/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ComposeContext } from './context/Compose.Context';
import { rootArrayContext } from './context/Root.Context';




const queryClient = new QueryClient();

// ReactElement is what gets returned from React Components.

const App: FC = (): ReactElement => {
  return(
  <>
  <QueryClientProvider client={queryClient}>
    <ToastContainer/>
    <ComposeContext components={rootArrayContext}>
  <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <Dashboard/>
    </ThemeProvider>
    </ComposeContext>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider> 
  </>
  )
};

export default App;
