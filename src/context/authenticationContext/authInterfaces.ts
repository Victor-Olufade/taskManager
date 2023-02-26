import { Priority, Status } from "../../components/createTasks/enums";


export interface User{
    id: string,
    name: string,
    email: string,
    salt: string,
    verified: boolean,
    otp: string,
    otpExpiry: string
}

export interface Task{
    id: string,
    title: string,
    date: string,
    description: string,
    priority: Priority,
    status: Status,
    userId: string,
    user: User
}



