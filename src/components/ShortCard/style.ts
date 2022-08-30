import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
  card: ViewStyle;
  details: ViewStyle;
  cartButton: ViewStyle;
  bar: ViewStyle;
  imageContainer: ImageStyle;
  cartButtonText: TextStyle;
  detailText: TextStyle;
}

export default StyleSheet.create<Style>({
  card: {
    zIndex: 1,
    height: 100,
    width: '88%',
    bottom: '-20%',
    borderRadius: 18,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  details: {
    width: 115,
    height: '60%',
    maxWidth: 120,
    marginRight: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 50,
    marginVertical: 12,
    alignItems: 'center',
    borderColor: '#FF1476',
    justifyContent: 'center',
  },
  cartButton: {
    height: '60%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF1476',
  },
  cartButtonText: {
    padding: 8,
    width: '80%',
    textAlign: 'center',
  },
  bar: {
    height: 3,
    bottom: 2.5,
    width: '80%',
    elevation: 5,
    shadowRadius: 1,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOpacity: 0.75,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 2 },
  },
  detailText: {
    flexWrap: 'wrap',
  },
});
