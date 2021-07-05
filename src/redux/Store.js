
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers';

export let Store;

export const intialiseStore = () => {

}
//store created.
Store = createStore(rootReducer, applyMiddleware(thunk)); 