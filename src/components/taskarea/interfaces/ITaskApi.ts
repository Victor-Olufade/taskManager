import { Priority } from "../../createTasks/enums";
import { Status } from "../../createTasks/enums";

export interface ITaskApi{
    id: string,
    date: string,
    title: string,
    description: string,
    status: `${Status}`,
    priority: `${Priority}`
}