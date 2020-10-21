import {StyleSheet, Dimensions} from 'react-native';

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70757d',
  },

  header: {
    flex: 1,
    backgroundColor: '#2a2c30',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },

  headerText: {
    color: '#e0e0e0',
    fontSize: 30,
    fontWeight: 'bold',
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2a2c30',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },

  footerText: {
    flex: 2,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e0e0e0',
    justifyContent: 'flex-start',
  },

  image: {
    flex: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
});

const productStyle = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
  },

  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },

  emoji: {
    fontSize: 25,
    paddingRight: 15,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },

  image: {
    width: Dimensions.get('screen').width * 0.95,
    height: Dimensions.get('window').height * 0.45,
    resizeMode: 'stretch',
    marginTop: 10,
    borderRadius: 15,
  },

  image2: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: '38%',
    left: '38%',
    // transform: [{ translateX: -'50%' }, { translateY: -'50%' }]
  },

  image2_anime: {
    height: 200,
    width: 200,
    position: 'absolute',
    top: '25%',
    left: '25%',
  },

  desc: {
    color: '#e0e0e0',
    textAlign: 'justify',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
});

export {main, productStyle};
