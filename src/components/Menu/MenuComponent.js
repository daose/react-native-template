import React, { Component } from 'react';
import { ListView, Button, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const demos = [
  {
    title: 'Login Form',
    action: 'LOGIN'
  },
  {
    title: 'Network Request',
    action: 'REDDIT'
  },
  {
    title: 'Tabs',
    action: 'TABS'
  },
  {
    title: 'Maps',
    action: 'MAPS'
  }
];

export default class MenuComponent extends Component {
  static renderRow({ title, action }) {
    return (
      <View style={styles.button}>
        <Button
          title={title}
          onPress={Actions[action]}
        />
      </View>
    );
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(demos)
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={MenuComponent.renderRow}
      />
    );
  }
}
