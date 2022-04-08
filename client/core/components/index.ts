import { CoreComponents } from './core';
import { GenericComponents } from './generic';
import { TrackerComponents } from './tracker';

export const Components = [
  ...CoreComponents,
  ...GenericComponents,
  ...TrackerComponents
];

export * from './core';
export * from './generic';
