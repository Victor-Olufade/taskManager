import React, {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState
} from 'react';
import { User } from './authInterfaces';
import { apiPost } from '../../axios/api';
import { toast } from 'react-toastify';

const initialUserState = JSON.parse(
  localStorage.getItem('user') as string,
)
  ? JSON.parse(localStorage.getItem('user') as string)
  : {};

export const AuthContext = createContext({
  registerMessage: '',
  verifyMessage: '',
  resendMessage: '',
  loginMessage: '',
  signature: '',
  user: initialUserState as User,
  register: (path: string, body: object) => {},
  loading: false,
  verify: (path: string, body: object) => {},
  resendOtp: (path: string, body: object) => {},
  login: (path: string, body: object) => {},
});


export const AuthContextProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [registerMessage, setRegisterMessage] =
    useState<string>('');
  const [verifyMessage, setVerifyMessage] =
    useState<string>('');
  const [resendMessage, setResendMessage] =
    useState<string>('');
  const [loginMessage, setLoginMessage] = useState('');
  const [user, setUser] = useState(initialUserState);
  const [signature, setSignature] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async (
    path: string,
    body: object,
  ): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await apiPost(path, body);
      setRegisterMessage(data.message);
      setUser(data.createdUser);
      localStorage.setItem('signature', data.signature);
      if (data.message) {
        setLoading(false);
        toast.success(data.message);
      } else {
        setLoading(false);
        toast.error('Something went wrong');
      }
    } catch (err: any) {
      setLoading(false);
      if (
        err.response?.data?.Error ===
        'Internal server error'
      ) {
        toast.error('Something went wrong, please hang on');
      } else {
        toast.error(
          err.response?.data?.Error ||
            'Something went wrong',
        );
      }
    }
  };

  const verify = async (
    path: string,
    body: object,
  ): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await apiPost(path, body);
      if (data.message) {
        setVerifyMessage(data.message);
        setLoading(false);
        toast.success(data.message);
      } else {
        setLoading(false);
        toast.error('Something went wrong');
      }
    } catch (err: any) {
      setLoading(false);
      if (
        err.response?.data?.Error ===
        'Internal server error'
      ) {
        toast.error('Something went wrong, please hang on');
      } else {
        toast.error(
          err.response?.data?.Error ||
            'Something went wrong',
        );
      }
    }
  };

  const resendOtp = async (
    path: string,
    body: object,
  ): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await apiPost(path, body);
      if (data && data.message) {
        setResendMessage(data.message);
        setLoading(false);
        toast.success(data.message);
      } else {
        setLoading(false);
        toast.error('Something went wrong');
      }
    } catch (err: any) {
      setLoading(false);
      if (
        err.response?.data?.Error ===
        'Internal server error'
      ) {
        toast.error('Something went wrong, please hang on');
      } else {
        toast.error(
          err.response?.data?.Error ||
            'Something went wrong',
        );
      }
    }
  };

  const login = async (
    path: string,
    body: object,
  ): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await apiPost(path, body);
      if (data && data.message) {
        setLoginMessage(data.message);
        setLoading(false);
        localStorage.setItem('signature', data.signature);
        setSignature(data.signature)
        toast.success(data.message);
        if (data && data.userObj) {
          localStorage.setItem(
            'user',
            JSON.stringify(data.userObj),
          );
          setUser(data.userObj)
        }
      } else {
        setLoading(false);
        toast.error('Something went wrong');
      }
    } catch (err: any) {
      setLoading(false);
      if (
        err.response?.data?.Error ===
        'Internal server error'
      ) {
        toast.error('Something went wrong, please hang on');
      } else {
        toast.error(
          err.response?.data?.Error ||
            'Something went wrong',
        );
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        registerMessage,
        user,
        signature,
        loading,
        verify,
        resendOtp,
        verifyMessage,
        resendMessage,
        loginMessage,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
