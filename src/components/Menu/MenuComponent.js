import React, { Component, PropTypes } from 'react';
import { ListView, Button, View } from 'react-native';
import styles from './styles';

const demos = [
  {
    title: 'Login Form',
    action: 'Login'
  },
  {
    title: 'Network Request',
    action: 'Reddit'
  },
  {
    title: 'Tabs',
    action: 'Tabs'
  },
  {
    title: 'Maps',
    action: 'Maps'
  }
];

export default class MenuComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(demos)
    };

    this.renderRow = this.renderRow.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  renderRow({ title, action }) {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.button}>
        <Button
          title={title}
          onPress={() => navigate(action)}
        />
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
