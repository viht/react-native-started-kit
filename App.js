import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { AppLoading, Asset, Font } from 'expo';

import store from './app/store';

import I18n from './app/common/utils/languageHelper';
import AppNavigatorService from './app/services/navigator/AppNavigatorService';
import ImageConstant from './app/common/constants/image';
import FontType from './app/common/constants/font';

import MainNavigator from './app/containers/common-navigator';

class App extends Component {
  state = {
    isReady: false,
  }

  componentWillMount() {
    I18n.initAsync();
  }

  cacheImages = images => (
    images.map((image) => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      }
      return Asset.fromModule(image).downloadAsync();
    })
  );

  cacheFonts = fonts => (
    fonts.map(font => Font.loadAsync(font))
  );

  loadResourcesAsync = async () => (
    Promise.all([
      ...this.cacheImages([]),
      ...this.cacheFonts([
      ]),
    ])
  );

  // In this case, you might want to report the error to your error
  // reporting service, for example Sentry
  handleLoadingError = error => console.warn(error);

  handleFinishLoading = () => {
    this.setState({ isReady: true });
  };

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onFinish={this.handleFinishLoading}
          onError={this.handleLoadingError}
        />
      );
    }

    return (
      <Provider store={store}>
        <MainNavigator
          ref={(navigatorRef) => {
            AppNavigatorService.setContainer(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

export default App;
