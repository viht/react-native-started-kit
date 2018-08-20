import { Dimensions, PixelRatio } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const { width, height } = Dimensions.get('window');

// const tabNavigateWidth = height * 0.09375;
// const tabNavigateWidth = responsiveWidth(9.375);

const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

const Size = {
  width,
  height,
};

export default Size;
