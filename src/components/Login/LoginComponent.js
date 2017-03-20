import React, { PropTypes } from 'react';
import { View, Button } from 'react-native';
import { Field } from 'redux-form';
import { TextInput } from '../common/form';
import styles from './styles';

const LoginComponent = ({ onSubmit }) => (
  <View style={styles.container}>
    <Field name="email" label="Email" component={TextInput} />
    <Field name="password" label="Password" component={TextInput} />
    <Button onPress={onSubmit} title="Login" />
  </View>
);

LoginComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginComponent;
