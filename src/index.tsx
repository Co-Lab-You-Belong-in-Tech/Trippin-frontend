import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ComponentLayout from './themes/theme';
import store from './store/store';

export type RootState = ReturnType<typeof store.getState>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ComponentLayout>
    <Provider store={store}>
      <App />
    </Provider>
  </ComponentLayout>
);

serviceWorkerRegistration.unregister();


reportWebVitals();
