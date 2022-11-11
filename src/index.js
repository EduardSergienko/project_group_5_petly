import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="project_group_5_petly">
      <App />
    </BrowserRouter>
  </Provider>

  // </React.StrictMode>
);
