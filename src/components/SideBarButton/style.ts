import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
  buttonContainer: ViewStyle;
  imageContainer: ImageStyle;
  sideBarButton: ViewStyle;
  shortTitle: TextStyle;
}

export default StyleSheet.create<Style>({
  buttonContainer: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderRadius: 50,
    marginVertical: 12,
    alignItems: 'center',
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sideBarButton: {
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  shortTitle: {
    marginTop: 6,
    alignSelf: 'center',
  },
});
