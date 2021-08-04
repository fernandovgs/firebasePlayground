import { StyleSheet } from 'react-native';

const customButtonStyle = StyleSheet.create({
  /* BUTTONS */
  customButtonContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#328dff',
    borderRadius: 40,
  },
  customButtonTouchable: {
    width: '100%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonTitle: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 18,
  },
});

export default customButtonStyle;
