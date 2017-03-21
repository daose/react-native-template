import { StyleSheet } from 'react-native';
import { layout } from '../../styles';

export default StyleSheet.create({
  container: {
    paddingTop: layout.navBarHeight
  },
  rowContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 8
  },
  text: {
    flex: 1
  }
});
