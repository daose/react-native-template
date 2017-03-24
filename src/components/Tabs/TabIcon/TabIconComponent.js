import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const TabIconComponent = ({ selected, title }) => (
  <Text style={selected ? styles.active : styles.disabled}>
    {title}
  </Text>
);

TabIconComponent.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired
};

TabIconComponent.defaultProps = {
  selected: false
};

export default TabIconComponent;

