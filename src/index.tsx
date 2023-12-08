import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './1_app/App';
import LayoutLocalStorage from './1_app/LayoutLocalStorage';
import { store } from './4_shared/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LayoutLocalStorage>
        <App />
      </LayoutLocalStorage>
    </Provider>
  </React.StrictMode>
);
