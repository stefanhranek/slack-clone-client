import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8082/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();
