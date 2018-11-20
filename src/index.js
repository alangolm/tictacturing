import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <h1>Hello world!</h1>
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
