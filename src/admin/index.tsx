import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import 'antd/dist/antd.css';
import { HomeManagement } from 'admin/container/HomeManagement';


ReactDOM.render(
  <React.StrictMode>
    <HomeManagement></HomeManagement>
  </React.StrictMode>,
  document.getElementById('root')
);

