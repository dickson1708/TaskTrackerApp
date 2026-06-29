import dayjs from 'dayjs/esm';

import { Status } from 'app/entities/enumerations/status.model';
import { IUser } from 'app/entities/user/user.model';

export interface ITask {
  id: number;
  taskId?: number | null;
  title?: string | null;
  description?: string | null;
  status?: keyof typeof Status | null;
  createdAt?: dayjs.Dayjs | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
