import {StyleSheet} from 'react-native';

export default {
  primary: '#17a47e',
  primary900: '#2c515f',
  primary800: '#206669',
  primary700: '#34807b',
  primary600: '#138c63',
  primary500: '#17a47e',
  primary400: '#61c19e',
  primary200: '#abddb8',
  primary100: '#e4f4ef',
  primary50: '#eff4f2',

  secondary: '#ca71eb',

  white: '#ffffff',
  black: '#000000',

  grey900: '#2d2d2d',
  grey800: '#3d3d3d',
  grey700: '#555555',
  grey600: '#6f6f6f',
  grey500: '#7f7f7f',
  grey400: '#a5a5a5',
  grey300: '#cfcfcf',
  grey200: '#dfdfdf',
  grey100: '#ededed',
  grey75: '#f4f4f4',
  grey50: '#f8f8f8',
  greyOutline: '#bbb',

  textgray6: '#121F26',
  textgray5: '#23343F',
  textgray4: '#425866',
  textgray3: '#677984',
  textgray2: '#949FA6',
  textgray1: '#C7CFD4',

  searchBg: '#303337',

  success: '#4faf50',
  successDark: '#3b873d',
  successDarkText: '#1e4620',
  error: '#ec4236',
  errorDark: '#e4240d',
  errorDarkText: '#621b16',
  info: '#3c96f3',
  infoDark: '#2e79d0',
  infoDarkText: '#143d61',
  warning: '#f29826',
  warningDark: '#c7771c',
  warningDarkText: '#663d0a',

  sub: {
    yellow: '#f9cd5f',
    orange: '#f5961d',
    blueGreen: '#2aa5ad',
    darkBlueGreen: '#51949d',
    blue: '#80d2e4',
    darkBlue: '#5898e3',
    brown: '#716759',
    ping: '#ff9182',
    purple: '#a77fbf',
  },

  contractType: {
    fund: '#17a47e',
    etfKr: '#80d2e4',
    etfUs: '#5898e3',
    pension: '#abddb8',
    cma: '#34807b',
  },

  assetClass: {
    stock: {
      domestic: '#f9cd5f',
      oversea: '#f5961d',
    },
    bond: {
      domestic: '#2aa5ad',
      oversea: '#51949d',
    },
    liquidity: '#a77fbf',
    income: '#ff9182',
    commodity: '#716759',
  },

  disabled: 'hsl(208, 8%, 90%)',
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
  platform: {
    ios: {
      primary: '#007aff',
      secondary: '#5856d6',
      grey: '#7d7d7d',
      searchBg: '#dcdce1',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00',
    },
    android: {
      primary: '#2196f3',
      secondary: '#9C27B0',
      grey: 'rgba(0, 0, 0, 0.54)',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ffeb3b',
    },
    web: {
      primary: '#2089dc',
      secondary: '#ca71eb',
      grey: '#393e42',
      searchBg: '#303337',
      success: '#52c41a',
      error: '#ff190c',
      warning: '#faad14',
    },
  },
  shinhan: '#115599',
  kb: '#EEB73F',
};
