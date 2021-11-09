
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HomeManagement } from 'admin/container/HomeManagement';
import 'normalize.css'
import 'antd/dist/antd.css';
import store from '../store';



ReactDOM.render(
  <Provider store={store}><HomeManagement/></Provider>,
  document.getElementById('root')
);

