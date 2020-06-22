import React from "react";

import Channels from '../components/Channels';

export default () => (
  <div className="app-layout">
    <div className="teams">Teams</div>
    <Channels>Channels</Channels>
    <div className="header">Header</div>
    <div className="messages">
      <ul className="message-list">
        <li></li>
        <li></li>
      </ul>
    </div>
    <div className="input">
      <input type="text" placeholder="CSS Grid Layout Module" />
    </div>
  </div>
);
