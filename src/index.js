import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from "react-apollo";
import "semantic-ui-css/semantic.min.css";

import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";

const networkInterface = createNetworkInterface({
  uri: "http://localhost:8082/graphql",
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      // adding 'x-' is like saying this is a custom heading
      req.options.headers["x-token"] = localStorage.getItem("token");
      req.options.headers["x-refresh-token"] = localStorage.getItem(
        "x-refresh-token"
      );
      next();
    },
  },
]);

networkInterface.useAfter([
  {
    applyAfterware({ response: { headers } }, next) {
      const token = headers.get("x-token");
      const refreshToken = headers.get("x-refresh-token");

      if (token) {
        localStorage.setItem("token", token);
      }

      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }

      next();
    },
  },
]);

const client = new ApolloClient({
  networkInterface,
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById("root"));

serviceWorker.unregister();
