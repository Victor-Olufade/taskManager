import React, {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState,
} from 'react';

export const TaskStatusContext = createContext({
  updated: false,
  toggle: () => {},
  logout: () => {},
});

export const TaskStatusContextProvider: FC<
  PropsWithChildren
> = (props): ReactElement => {
  const [updated, setUpdated] = useState<boolean>(false);
  const { children } = props;

  const toggleHandler = () => {
    updated ? setUpdated(false) : setUpdated(true);
  };

  const logout = () => {
    const keysToRemove: string[] = ['signature', 'user'];

    for (let key = 0; key < keysToRemove.length; key++) {
      localStorage.removeItem(keysToRemove.at(key) as string);
    }
    window.location.href = '/login';
  };

  return (
    <TaskStatusContext.Provider
      value={{
        updated,
        toggle: toggleHandler,
        logout
      }}
    >
      {children}
    </TaskStatusContext.Provider>
  );
};
