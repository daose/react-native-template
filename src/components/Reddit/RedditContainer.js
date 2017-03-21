import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RedditComponent from './RedditComponent';

class RedditContainer extends Component {

  static propTypes = {
    fetchHotList: PropTypes.func.isRequired,
    hotList: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchHotList();
  }

  render() {
    return (
      <RedditComponent
        data={this.props.hotList}
      />
    );
  }
}

const mapStateToProps = state => ({
  hotList: state.reddit.hotList
});

const mapDispatchToProps = dispatch => ({
  fetchHotList: () => dispatch({ type: 'FETCH_HOT_LIST' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditContainer);
