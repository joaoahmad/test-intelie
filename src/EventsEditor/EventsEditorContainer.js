import { connect } from 'react-redux';
import EventsEditor from './EventsEditor';
import { actions, selectors } from './';

const mapStateToProps = (state) => {
  const eventsEditor = selectors.eventsEditorSelector(state);

  return {
    eventsEditor,
    start: actions.start,
    stop: actions.stop,
    addRaw: actions.addRaw,
    changeMode: actions.changeMode,
  };
}

export default connect(mapStateToProps)(EventsEditor);
