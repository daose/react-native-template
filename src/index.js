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
import TabDummy from './components/Tabs/TabDummy';
import TabIcon from './components/Tabs/TabIcon';

const sagaMiddleware = createSagaMiddleware();

const ReduxRouter = connect()(Router);
const scenes = Actions.create(
  <Scene key="ROOT">
    <Scene key="MENU" component={Menu} title="Menu" initial duration={0} />
    <Scene key="LOGIN" component={Login} title="Login" duration={0} />
    <Scene key="REDDIT" component={Reddit} title="Reddit" duration={0} />
    <Scene key="TABS" tabs duration={0}>
      <Scene key="TAB_ONE" component={TabDummy} icon={TabIcon} title="Dummy One" duration={0} />
      <Scene key="TAB_TWO" component={TabDummy} icon={TabIcon} title="Dummy Two" duration={0} />
      <Scene key="TAB_THREE" component={TabDummy} icon={TabIcon} title="Dummy Three" duration={0} />
      <Scene key="TAB_FOUR" component={TabDummy} icon={TabIcon} title="Dummy Four" duration={0} />
    </Scene>
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
