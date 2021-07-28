import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const clothTemplateStyle = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
  },
  // containers
  scrollViewContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    maxHeight: screenHeight,
    paddingHorizontal: '4%',
    paddingTop: '4%',
    // paddingBottom: '10%',
  },
  titleContainer: {
    // flex: 0.1,
    borderWidth: 0.5,
    borderColor: 'black',
    width: '100%',
    height: '10%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: 'white',
    elevation: 8,
    marginBottom: '8%',
  },
  productInfoContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: '70%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    marginBottom: '8%',
  },
  productImageContainer: {

  },

  /* LABELS */
  titleLabel: {
    fontSize: 30,
  },

  /* BUTTONS */
  buyButtonContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#328dff',
    borderRadius: 40,
  },
  buyButtonTouchable: {
    width: '100%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButtonTitle: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 18,
  },
});

export default clothTemplateStyle;
