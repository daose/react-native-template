import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TabDummyComponent = ({ title }) => (
  <View style={styles.container}>
    {console.log(title)}
    <Text>{title}</Text>
  </View>
);

TabDummyComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default TabDummyComponent;
