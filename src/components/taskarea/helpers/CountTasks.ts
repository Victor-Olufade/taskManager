import { ITaskApi } from '../interfaces/ITaskApi';
import { TaskCounterStatuses } from '../../taskCounter/interfaces/ItaskCounter';

export const countTasks = (
  tasks: ITaskApi[],
  status: TaskCounterStatuses,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }

  const tasksArray = tasks.filter(
    (task) => task.status === status,
  );

  return tasksArray.length;
};
