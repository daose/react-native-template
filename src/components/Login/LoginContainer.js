import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import LoginComponent from './LoginComponent';

const LoginContainer = ({ handleSubmit }) => (
  <LoginComponent onSubmit={handleSubmit} />
);

LoginContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired
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
  form: 'user'
})(LoginContainer));
