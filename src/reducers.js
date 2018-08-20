import { combineReducers } from 'redux';
import { reducer as eventsEditor } from './EventsEditor';

const reducers = combineReducers({
  eventsEditor
});

export default reducers;
