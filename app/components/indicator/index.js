import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Easing } from 'react-native';
import RN from 'react-native/package';

const [major, minor] = RN.version.split('.');
const hasLoopSupport = !major && minor >= 45;

export default class Indicator extends PureComponent {
  static propTypes = {
    animationEasing: PropTypes.func,
    animationDuration: PropTypes.number,

    animating: PropTypes.bool,
    interaction: PropTypes.bool,

    renderComponent: PropTypes.func,
    count: PropTypes.number,
  };

  static defaultProps = {
    animationEasing: Easing.linear,
    animationDuration: 1200,

    animating: true,
    interaction: true,

    count: 1,
  };

  constructor(props) {
    super(props);

    this.renderComponent = this.renderComponent.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
    this.stopAnimation = this.stopAnimation.bind(this);

    this.state = {
      progress: new Animated.Value(0),
    };

    this.mounted = false;
  }

  componentDidMount() {
    const { animating } = this.props;

    this.mounted = true;

    if (animating) {
      this.startAnimation();
    }
  }

  componentWillReceiveProps(props) {
    const { animating } = this.props;

    if (animating ^ props.animating) {
      if (animating) {
        this.stopAnimation();
      } else {
        this.startAnimation();
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  stopAnimation() {
    const { animation } = this.state;

    if (animation == null) {
      return;
    }

    animation.stop();

    this.setState({ animation: null });
  }

  startAnimation({ finished } = {}) {
    const { progress } = this.state;
    const {
      interaction,
      animationEasing,
      animationDuration,
    } = this.props;

    if (!this.mounted || finished === false) {
      return;
    }

    const animation = Animated.timing(progress, {
      duration: animationDuration,
      easing: animationEasing,
      useNativeDriver: true,
      isInteraction: interaction,
      toValue: 1,
    });

    if (hasLoopSupport) {
      Animated
        .loop(animation)
        .start();
    } else {
      progress.setValue(0);
      animation.start(this.startAnimation);
    }

    this.setState({ animation });
  }

  renderComponent(undefined, index) {
    const { progress } = this.state;
    const { renderComponent, count } = this.props;

    if (typeof renderComponent === 'function') {
      return renderComponent({ index, count, progress });
    }
    return null;
  }

  render() {
    const { count, ...props } = this.props;

    return (
      <Animated.View {...props}>
        {Array.from(new Array(count), this.renderComponent)}
      </Animated.View>
    );
  }
}
