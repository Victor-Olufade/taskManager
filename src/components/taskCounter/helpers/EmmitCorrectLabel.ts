import { Status } from '../../createTasks/enums';
import { TaskCounterStatuses } from '../interfaces/ItaskCounter';

export const EmmitCorrectLabel = (
  status: TaskCounterStatuses,
): string => {
  switch (status) {
    case Status.todo:
      return 'Todo';
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
  }
};
