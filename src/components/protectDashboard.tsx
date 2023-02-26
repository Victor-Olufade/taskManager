import React, { useState, useEffect } from 'react';
import {
  useLocation,
  Navigate
} from 'react-router-dom';
// import { Location } from 'history';

interface Props {
  children: React.ReactNode;
}

// interface LocationState {
//   from: {
//     pathname: string;
//   };
// }

// const getPreviousRoute = (location: Location): string => {
//   const state = location.state as LocationState;
//   return state?.from?.pathname || '/';
// };

const ProtectedRoute: React.FC<Props> = ({
  children,
}) => {
  const location = useLocation();
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    const isAuthenticated =
      localStorage.getItem('signature');
    const user = JSON.parse(
      localStorage.getItem('user') as string,
    );

    if (
      isAuthenticated?.length !== 0 &&
      user
    ) {
      setRedirectUrl('');
      return;
    }

    setRedirectUrl('/login');
  }, [location]);

  if (redirectUrl) {
    return <Navigate to={redirectUrl} />;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
