import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Sidebar.css';

@inject('apiStore')
@observer
export default class Sidebar extends Component {
  render() {
    const physicians = this.props.apiStore.physicians.map((item, i) => {
      const className = this.props.apiStore.physicianId === item.id ? 'active' : '';
      return (
        <li
          className={className}
          key={i}
          onClick={() => {
            this.props.apiStore.loadAppointments(item.id, item.email, item.first_name);
          }}
        >
          {item.first_name}
        </li>
      )
    });

    console.log('physicians', physicians);

    return (
      <div className="Sidebar">
        <h2>Physicians</h2>
        <ul>
          {physicians}
        </ul>
      </div>
    )
  }
}
