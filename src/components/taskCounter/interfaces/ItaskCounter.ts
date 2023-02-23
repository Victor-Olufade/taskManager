import { Status } from '../../createTasks/enums';

export type TaskCounterStatuses =
  | Status.todo
  | Status.inProgress
  | Status.completed;

export interface ItaskCounter {
  count?: number;
  status?: TaskCounterStatuses;
}
