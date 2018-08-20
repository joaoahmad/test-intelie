import EventsEditor from './EventsEditorContainer';
import reducer from './ducks/reducer';
import * as actions from './ducks/actions';
import * as selectors from './ducks/selectors';

export { reducer, actions, selectors };

export default EventsEditor;

export type Event = {
    timestamp: number,
    type: string,
}

export type EventEditor = {
  mode: "basic" | "advanced",
  events: Array<Event>
}
