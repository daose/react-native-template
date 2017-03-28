import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers';
import Navigator from './Navigator';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
