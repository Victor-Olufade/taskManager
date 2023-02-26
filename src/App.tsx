import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import Dashboard from './pages/dashboard/Dashboard';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ComposeContext } from './context/Compose.Context';
import { rootArrayContext } from './context/Root.Context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Verify from './pages/verify/Verify';
import ProtectedRoute from './components/protectDashboard';

const queryClient = new QueryClient();


const App: FC = (): ReactElement => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <ComposeContext components={rootArrayContext}>
          <ThemeProvider theme={customTheme}>
            <CssBaseline />

            <Router>
              <Routes>
               
                <Route
                  path="/dashboard"
                  element={
                   <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
                />
                
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Signup />} />
                <Route
                  path="/verify"
                  element={<Verify />}
                />
              </Routes>
            </Router>
          </ThemeProvider>
        </ComposeContext>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
