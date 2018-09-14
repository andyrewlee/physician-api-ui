import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Dashboard.css';

@inject('apiStore')
@observer
export default class Dashboard extends Component {
  render() {
    const appointments = this.props.apiStore.appointments.map((item, i) => {
      return (
        <tr key={i}>
          <td>{i}</td>
          <td>{item.name}</td>
          <td>{item.time}</td>
          <td>{item.kind}</td>
        </tr>
      )
    });

    return (
      <div className="Dashboard">
        <h1>{this.props.apiStore.physicianName}</h1>
        <p>{this.props.apiStore.physicianEmail}</p>

        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Time</td>
              <td>Kind</td>
            </tr>
          </thead>
          <tbody>
            {appointments}
          </tbody>
        </table>
      </div>
    )
  }
}
