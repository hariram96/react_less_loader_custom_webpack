import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from './serviceWorker';

import "./styles/index.less";
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();