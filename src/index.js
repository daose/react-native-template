import React from 'react';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import Login from './components/Login';
import Reddit from './components/Reddit';

// Set up redux-saga
const sagaMiddleware = createSagaMiddleware();

// Set up router
const ReduxRouter = connect()(Router);
const scenes = Actions.create(
  <Scene key="ROOT">
    <Scene key="LOGIN" component={Login} title="Login" />
    <Scene key="REDDIT" component={Reddit} title="Reddit" type={ActionConst.REPLACE} />
  </Scene>
);

// Set up redux
const store = createStore(reducers, applyMiddleware(sagaMiddleware));


// Run redux-saga
sagaMiddleware.run(sagas);


const App = () => (
  <Provider store={store}>
    <ReduxRouter scenes={scenes} />
  </Provider>
);

export default App;
