export const FILTERS = {
  ALL: 'all',
  TODO: 'todo',
  DONE: 'done',
} as const;

export type FilterType = (typeof FILTERS)[keyof typeof FILTERS];
