import {createStore,combineReducers} from 'redux';
import  homeManagementReducer from './admin/container/HomeManagement/store/reducer'
const reducer = combineReducers({
  homeManagement:homeManagementReducer
})
const store = createStore(reducer,  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

export default store;