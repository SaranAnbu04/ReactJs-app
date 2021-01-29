import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Reducer from '../reducer/reducer';

const loggerMiddleware = createLogger();

export const store = createStore(
    Reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);