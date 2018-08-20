// @flow

import React, { Component } from 'react';
import './EventsEditor.css';
import type { Event, EventEditor } from './';

type Props = {
  eventsEditor: EventEditor
}

type State = Props;

class EventsEditor extends Component<Props, State> {
  render() {
    const { mode, events } = this.props.eventsEditor;

    return (
      <div className='EventsEditor'>
        <div>{mode}</div>
        <div>{events.length}</div>
      </div>
    );
  }

}

export default EventsEditor;
