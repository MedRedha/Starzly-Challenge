import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
  carouselContainer: ViewStyle;
  carousel: ViewStyle;
  pagination: ViewStyle;
  dot: ViewStyle;
  card: ViewStyle;
  upperDetails: ViewStyle;
  upperDetailsRow: ViewStyle;
  downDetailsRow: ViewStyle;
  detailPrice: ViewStyle;
  downDetails: ViewStyle;
  badge: ViewStyle;
  ratingNReview: ViewStyle;
  rating: ViewStyle;
  footer: ViewStyle;
  innerButton: ViewStyle;
  cartButton: ViewStyle;
  videoButton: ViewStyle;
  closeButton: ViewStyle;
  imageContainer: ImageStyle;
  avatarContainer: ImageStyle;
  cartButtonText: TextStyle;
  detailText: TextStyle;
  downDetailText: TextStyle;
  divider: TextStyle;
  description: ViewStyle;
  descriptionText: TextStyle;
}

export default StyleSheet.create<Style>({
  carouselContainer: {
    width: '90%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    width: 100,
    maxWidth: 100,
    height: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    alignSelf: 'center',
  },
  card: {
    zIndex: 1,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    justifyContent: 'flex-start',
    borderTopRightRadius: 16,
  },
  upperDetails: {
    width: '90%',
    height: '7%',
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  upperDetailsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  downDetailsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailPrice: {
    minWidth: 85,
    marginRight: 6,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  badge: {
    height: 20,
    width: 80,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF1476',
  },
  divider: {
    width: '90%',
    borderWidth: 0.4,
    marginVertical: 10,
    borderColor: 'gray',
  },
  downDetails: {
    width: '90%',
    height: '15%',
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  footer: {
    width: '90%',
    height: '75%',
    marginTop: 42.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    marginRight: 10,
    borderColor: 'white',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingNReview: {
    width: '25%',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  innerButton: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  cartButton: {
    width: '60%',
    height: '8%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF1476',
  },
  videoButton: {
    width: '35%',
    height: '8%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  cartButtonText: {
    marginLeft: 10,
    textAlign: 'left',
  },
  detailText: {
    flexWrap: 'wrap',
    width: '50%',
  },
  downDetailText: {
    flexWrap: 'wrap',
    width: '100%',
    marginVertical: 2,
    alignSelf: 'flex-start',
  },
  closeButton: {
    margin: 18,
    alignSelf: 'flex-end',
  },
  description: {
    marginTop: 15,
    width: '80%',
  },
  descriptionText: {
    width: '90%',
    marginTop: 6,
    flexWrap: 'wrap',
  },
});
