import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const responsiveHeight = height => {
  let percentage = (height / 878) * 100;
  let newHeight = (percentage / 100) * windowHeight;
  return newHeight;
};

const responsiveWidth = width => {
  let percentage = (width / 420) * 100;
  let newWidth = (percentage / 100) * windowWidth;
  return newWidth;
};

export {responsiveHeight, responsiveWidth};
