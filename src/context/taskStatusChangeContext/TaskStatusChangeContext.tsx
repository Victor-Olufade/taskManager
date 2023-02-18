import React, {createContext, FC, ReactElement, PropsWithChildren, useState} from 'react';

export const TaskStatusContext = createContext({
    updated: false,
    toggle: ()=> {},
})

export const TaskStatusContextProvider: FC<PropsWithChildren> = (props): ReactElement => {
    const [updated, setUpdated] = useState<boolean>(false);
    const {children} = props;

    const toggleHandler = () => {
        updated ? setUpdated(false) : setUpdated(true);
    }

    return <TaskStatusContext.Provider value={{
        updated,
        toggle: toggleHandler
    }}>
        {children}
    </TaskStatusContext.Provider>
}