import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import Menu from './components/Menu';
import Login from './components/Login';
import Reddit from './components/Reddit';
import Maps from './components/Maps';
import TabDummy from './components/Tabs/TabDummy';

const DummyTabsNavigator = TabNavigator({
  TabOne: {
    screen: TabDummy,
    navigationOptions: {
      title: 'Tab One'
    }
  },
  TabTwo: {
    screen: TabDummy,
    navigationOptions: {
      title: 'Tab Two'
    }
  },
  TabThree: {
    screen: TabDummy,
    navigationOptions: {
      title: 'Tab Three'
    }
  },
  TabFour: {
    screen: TabDummy,
    navigationOptions: {
      title: 'Tab Four'
    }
  }
});

const AppNavigator = StackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      title: 'Menu'
    }
  },
  Tabs: {
    screen: DummyTabsNavigator,
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Reddit: {
    screen: Reddit,
    navigationOptions: {
      title: 'Reddit'
    }
  },
  Maps: {
    screen: Maps,
    navigationOptions: {
      title: 'Maps'
    }
  }
});

const Navigator = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default connect(
  state => ({ nav: state.nav })
)(Navigator);
