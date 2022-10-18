//== import
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// local
import rootReducer from '../reducers';
import apiMiddleware from '../middlewares/loginMiddleware';


const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(apiMiddleware))
);

//== export
export default store;