import { StyleSheet } from 'react-native';

const crashButtonScreenStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    paddingVertical: '8%',
    borderWidth: 1,
    borderColor: 'black',
  },

  crashButtonContainer: {
    flex: 1,
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default crashButtonScreenStyle;
