import { Priority } from '../../createTasks/enums';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.low:
      return 'info.light';
    case Priority.normal:
      return 'grey.900';
    case Priority.high:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
