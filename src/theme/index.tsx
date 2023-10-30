import {Dimensions} from 'react-native';
import colors from './colors';
import {getBottomSpace, isIphoneX} from 'react-native-iphone-x-helper';
import {getStatusBarHeight} from 'react-native-status-bar-height';

//Todo: 폰트는 ios, android 구분해서 family 별도 처리 해야함.
const statusBarHeight = getStatusBarHeight(false);
const calcHeight = (withBottom = true) => {
  if (isIphoneX()) {
    return (
      Dimensions.get('window').height -
      statusBarHeight -
      (withBottom ? getBottomSpace() : 0)
    );
  } else {
    return Dimensions.get('window').height - statusBarHeight;
  }
};

const maxHeight = calcHeight();

const theme = {
  colors: colors,
  statusBarHeight: statusBarHeight,
  contentMaxHeight: maxHeight,
  Container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  Button: {
    containerStyle: {
      borderRadius: 6,
    },
    buttonStyle: {
      borderRadius: 6,
    },
    disabledStyle: {
      backgroundColor: '#DFDFDF',
      textColor: '#A5A5A5',
    },
  },
  Divider: {
    backgroundColor: colors.grey100,
  },
  Text: {
    h1Style: {
      fontSize: 34,
      lineHeight: 43,
      letterSpacing: 0,
    },
    h2Style: {
      fontSize: 30,
      lineHeight: 39,
      letterSpacing: 0,
    },
    h3Style: {
      fontSize: 24,
      lineHeight: 36,
      letterSpacing: 0,
    },
    h4Style: {
      fontSize: 21,
      lineHeight: 32,
      letterSpacing: 0,
    },
    h5Style: {
      fontSize: 19,
      lineHeight: 28,
      letterSpacing: 0,
    },
    h6Style: {
      fontSize: 17,
      lineHeight: 26,
      letterSpacing: 0,
    },
    p1Style: {
      fontSize: 15,
      lineHeight: 23,
      letterSpacing: 0,
    },
    p2Style: {
      fontSize: 13,
      lineHeight: 20,
      letterSpacing: 0,
    },
    captionStyle: {
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0,
    },
    subStyle: {
      fontSize: 11,
      lineHeight: 17,
      letterSpacing: 0,
    },
    sub2Style: {
      fontSize: 10,
      lineHeight: 16,
      letterSpacing: 0,
    },
  },
  Input: {
    containerStyle: {
      paddingHorizontal: 0,
      paddingVertical: 5,
    },
  },
};

export default theme;
export {colors, calcHeight};
