import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import reducer from './reducers';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

// ここで作られるstoreはアプリケーションで唯一のものになる
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
reportWebVitals();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
