import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginComponent from './LoginComponent';
import validate from '../../validators/login';

const LoginContainer = ({ handleSubmit, pristine, valid }) => (
  <LoginComponent
    canSubmit={!pristine && valid}
    onSubmit={handleSubmit}
  />
);

LoginContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => (
    new Promise((resolve) => {
      dispatch({ type: 'LOGIN', data, resolve });
    })
  )
});

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({
  form: 'login',
  validate
})(LoginContainer));
