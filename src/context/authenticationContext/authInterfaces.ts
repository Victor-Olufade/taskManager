import { Priority, Status } from "../../components/createTasks/enums";
import { initialTaskState } from "./auth";


export interface User{
    id: string,
    name: string,
    email: string,
    salt: string,
    verified: boolean,
    tasks: Task[]
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

export const initialUserState: User = {
    id: "",
    name: "",
    email: "",
    salt: "",
    verified: false,
    tasks: []
}

