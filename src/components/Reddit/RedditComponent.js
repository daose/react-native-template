import React, { Component, PropTypes } from 'react';
import { View, Text, ListView } from 'react-native';
import styles from './styles';

export default class RedditComponent extends Component {

  static renderRow(value) {
    return (
      <Text>{value}</Text>
    );
  }

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['hi', 'hitwo'])
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={RedditComponent.renderRow}
        />
      </View>
    );
  }
}
