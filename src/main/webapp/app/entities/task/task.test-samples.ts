import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 9181,
  taskId: 17867,
  title: 'luck overcoat instead',
  description: 'amongst supposing pricey',
  status: 'DONE',
  createdAt: dayjs('2026-06-28T21:10'),
};

export const sampleWithPartialData: ITask = {
  id: 873,
  taskId: 20483,
  title: 'positively really whoa',
  description: 'incidentally',
  status: 'DONE',
  createdAt: dayjs('2026-06-29T01:47'),
};

export const sampleWithFullData: ITask = {
  id: 13396,
  taskId: 17328,
  title: 'mmm',
  description: 'plain deselect ack',
  status: 'TODO',
  createdAt: dayjs('2026-06-29T01:04'),
};

export const sampleWithNewData: NewTask = {
  taskId: 8969,
  title: 'beside',
  description: 'seemingly between',
  status: 'INPROGRESS',
  createdAt: dayjs('2026-06-28T16:13'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
