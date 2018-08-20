// @flow
//
import * as types from './types';
import type Event from '../';

const createEvent = (event: Event) => ({
  type: types.CREATE_EVENT,
  payload: event,
});

const start = () => ({
  type: types.START,
});

const stop = () => ({
  type: types.STOP,
});

const changeMode = (mode) => ({
  type: types.CHANGE_MODE,
  payload: mode,
});

const editEventsRaw = (data: Array<Event>) => ({
  type: types.EDIT_EVENTS_RAW,
  payload: data,
});
