import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet'
import { Home } from 'front/container/Home/index'
import 'normalize.css'
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>{window.localStorage.title||'Moses'}</title>
    </Helmet>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


