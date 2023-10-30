export default {
  android: {
    regular: {
      fontFamily: 'SpoqaHanSansRegular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'SpoqaHanSansLight',
      fontWeight: 'normal',
    },
    condensed: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'normal',
    },
    condensed_light: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'light',
    },
    black: {
      // note(brentvatne): sans-serif-black is only supported on Android 5+,
      // we can detect that here and use it in that case at some point.
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
    thin: {
      fontFamily: 'SpoqaHanSansThin',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'SpoqaHanSansRegular',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'SpoqaHanSansBold',
      fontWeight: 'bold',
    },
  },
  default: {},
};
