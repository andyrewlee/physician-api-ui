import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';

import './Base.css';

@inject('apiStore')
@observer
export default class Base extends Component {
  render() {
    return (
      <div className="Base">
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}
