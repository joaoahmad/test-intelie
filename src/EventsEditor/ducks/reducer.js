import * as types from './types';
import type Event from '../';

const initialState = {
  mode: 'basic',
  started: false,
  events: [],
}

export function createEvent(event: Event) {
  return {
    timestamp: new Date().getTime(),
    ...event,
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CREATE_EVENT:
    return {
      ...state,
      events: [
        ...state.events,
        createEvent(action.payload),
      ],
    }

    case types.START:
    return {
      ...state,
      started: true,
    }

    case types.STOP:
    return {
      ...state,
      started: false,
    }

    case types.CHANGE_MODE:
    return {
      ...state,
      mode: action.payload,
    }

    default: return state;
  }
}
