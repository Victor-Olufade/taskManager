import React, {createContext, FC, ReactElement, PropsWithChildren, useState, SetStateAction} from 'react';
import { User } from './authInterfaces';
import { apiPost } from '../../axios/api';
import { initialUserState } from './authInterfaces';
import { Priority, Status } from '../../components/createTasks/enums';



const [loading, setLoading] = useState(false);

export const AuthContext = createContext({
    registerMessage: "",
    signature: "",
    user: {} as User,
    register: (path: string, body: object) => {},
    loading: false,
    setLoading,
})

export const initialTaskState = {
    id: "",
    title: "",
    date: "",
    description: "",
    priority: Priority.low,
    status: Status.todo,
    userId: "",
    user: initialUserState
}

export const AuthContextProvider: FC<PropsWithChildren> = ({children}): ReactElement => {

    const [registerMessage, setRegisterMessage] = useState<string>("")
    const [user, setUser] = useState(initialUserState)
    const [signature, setSignature] = useState("")
    const [loading, setLoading] = useState(false);
    

    const register = async (path: string, body: object): Promise<void> => {
        setLoading(true)
        const {data} = await apiPost(path, body);
        setRegisterMessage(data.message);
        setUser(data.createdUser);
        localStorage.setItem("signature", data.signature);
        if(registerMessage){
            setLoading(false)
            window.location.href = "/verify"
        }
    }

    return <AuthContext.Provider value={{
        register,
        registerMessage,
        user,
        signature,
        loading,
        setLoading
    }}>
        {children}
    </AuthContext.Provider>
}