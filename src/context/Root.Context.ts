import { TaskStatusContextProvider } from './taskStatusChangeContext/TaskStatusChangeContext';
import { AuthContextProvider } from './authenticationContext/auth';

export const rootArrayContext = [TaskStatusContextProvider, AuthContextProvider];
