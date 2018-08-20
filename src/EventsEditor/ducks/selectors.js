import { createSelector } from 'reselect';

export const eventsEditorSelector = state => state.eventsEditor;

export const events = state => createSelector(
  events,
  state => state.events
);
