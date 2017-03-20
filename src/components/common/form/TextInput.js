import React, { PropTypes } from 'react';
import { TextInput as ReactTextInput } from 'react-native';

const TextInput = ({ input, label, ...props }) => (
  <ReactTextInput
    placeholder={label}
    {...input}
    {...props}
  />
);

TextInput.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
};

export default TextInput;
