import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RedditComponent from './RedditComponent';

class RedditContainer extends Component {
  static propTypes = {
    fetchHotList: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchHotList();
  }

  render() {
    return (
      <RedditComponent />
    );
  }
}

const mapStateToProps = state => ({
  hotList: state.reddit.hot
});

const mapDispatchToProps = dispatch => ({
  fetchHotList: () => dispatch({ type: 'FETCH_HOT_LIST' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditContainer);
