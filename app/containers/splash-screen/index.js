import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import appActions from '../../store/actions/appActions';

import styles from './styles';

class SplashScreen extends Component {
  state = {
  }

  componentWillMount() {
    // this.handleUserStore();
  }

  handleUserStore = () => {
    const { actions } = this.props;
    // actions.checkExistedUser();
  }

  render() {
    console.log("Run...");
    return (
      <SafeAreaView style={styles.container} />
    );
  }
}

const mapStateToProps = (state) => {
  const { apps } = state;
  return {
    apps,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...appActions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
