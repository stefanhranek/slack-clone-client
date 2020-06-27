import React from "react";

import Channels from '../components/Channels';
import Teams from '../components/Teams';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Input from '../components/Input';
import AppLayout from '../components/AppLayout';

export default () => (
  <AppLayout>
    <Teams>Teams</Teams>
    <Channels 
      teamName="Team name"
      username="Username"
      channels={[{ id: 1, name:'general' }, { id: 2, name: 'random' }]}
      users={[{ id: 1, name:'slackbot' }, { id: 2, name: 'user1' }]}
      />
    <Header>Header</Header>
    <Messages>
      <ul className="message-list">
        <li></li>
        <li></li>
      </ul>
    </Messages>
    <Input>
      <input type="text" placeholder="CSS Grid Layout Module" />
    </Input>
  </AppLayout>
);
