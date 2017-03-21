import React, { PropTypes } from 'react';
import { View, Button } from 'react-native';
import { Field } from 'redux-form';
import { TextInput } from '../common/form';
import { required, email } from '../../helpers/validators';
import styles from './styles';

const LoginComponent = ({ onSubmit, canSubmit }) => (
  <View style={styles.container}>
    <Field name="email" label="Email" validate={[required, email]} component={TextInput} />
    <Field name="password" label="Password" validate={[required]} component={TextInput} />
    <Button onPress={onSubmit} title="Login" disabled={!canSubmit} />
  </View>
);

LoginComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  canSubmit: PropTypes.bool.isRequired
};

export default LoginComponent;
