import { Platform } from 'react-native';

const layout = {
  ...Platform.select({
    ios: {
      navBarHeight: 64
    },
    android: {
      navBarHeight: 54
    }
  })
};

export default layout;
