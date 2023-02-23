import { TaskCounterStatuses } from '../interfaces/ItaskCounter';
import { Status } from '../../createTasks/enums';

export const ShowCorrectBorderColor = (
  status: TaskCounterStatuses,
): string => {
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
  }
};
