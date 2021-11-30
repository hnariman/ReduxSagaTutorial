import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import * as types from "./Actions/actionTypes"
    
import rootReducers from "./Actions/rootReducer";
import rootSaga from "./Actions/usersagas";


const SagaMiddleware = createSagaMiddleware();

const middlewares = [SagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;