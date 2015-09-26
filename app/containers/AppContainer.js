import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import App from './App';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
    console.group && console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd && console.groupEnd(action.type);
    return result;
};

const crashReporter = store => next => action => {
    try {
        return next(action);
    }
    catch (err) {
        console.error('Caught an exception!', err);
        throw err;
    }
}


const createStoreWithMiddleware = applyMiddleware(thunk, /*crashReporter, */logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class AppContainer extends Component {
    render() {
        return <Provider store={store}>{() => <App />}</Provider>;
    }
}
