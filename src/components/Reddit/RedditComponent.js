import React, { Component, PropTypes } from 'react';
import { View, Linking, TouchableOpacity, Text, Image, ListView } from 'react-native';
import styles from './styles';

export default class RedditComponent extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  };

  static renderRow(post) {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(post.data.url)}>
        <View style={styles.rowContainer}>
          <Image source={{ uri: post.data.thumbnail }} style={styles.image} />
          <Text style={styles.text}>{post.data.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.data) });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={RedditComponent.renderRow}
          enableEmptySections
          initialListSize={5}
        />
      </View>
    );
  }
}
