import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import Login from './components/Login';
import Reddit from './components/Reddit';
import Menu from './components/Menu';

const sagaMiddleware = createSagaMiddleware();

const ReduxRouter = connect()(Router);
const scenes = Actions.create(
  <Scene key="ROOT">
    <Scene key="MENU" component={Menu} title="Menu" initial duration={0} />
    <Scene key="LOGIN" component={Login} title="Login" duration={0} />
    <Scene key="REDDIT" component={Reddit} title="Reddit" duration={0} />
  </Scene>
);

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <ReduxRouter scenes={scenes} />
  </Provider>
);

export default App;
