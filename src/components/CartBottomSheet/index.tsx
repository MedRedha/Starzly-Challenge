import React, { useState } from 'react';
import StylishText from '../StylishText';
import styles from './style';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/Feather';
import VideoCam from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';

interface CartBottomSheetProps {
  onClosePress: () => void;
  onAddToCartPress: () => void;
  talent: any;
}

const CartBottomSheet: React.FC<CartBottomSheetProps> = ({
  onClosePress,
  onAddToCartPress,
  talent,
}) => {
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const [inCart, setInCart] = useState(false);

  const images = [
    {
      product:
        'https://www.picng.com/upload/sunglasses/png_sunglasses_34571.png',
    },
    {
      product:
        'https://www.creativefabrica.com/wp-content/uploads/2021/05/17/Palm-Trees-Retro-Sunglasses-PNG-SVG-Graphics-12080533-1-1-580x387.jpg',
    },
    {
      product: 'https://m.media-amazon.com/images/I/41gK7PbLybL.jpg',
    },
    {
      product:
        'https://www.picng.com/upload/sunglasses/png_sunglasses_34571.png',
    },
    {
      product:
        'https://www.creativefabrica.com/wp-content/uploads/2021/05/17/Palm-Trees-Retro-Sunglasses-PNG-SVG-Graphics-12080533-1-1-580x387.jpg',
    },
  ];

  return (
    <View style={styles.card}>
      <Icon
        size={25}
        name='close'
        color='darkGray'
        style={styles.closeButton}
        onPress={onClosePress}
      />
      <View style={styles.carouselContainer}>
        <Carousel
          mode='parallax'
          data={images}
          loop={true}
          width={width}
          height={120}
          windowSize={5}
          autoPlay={true}
          pagingEnabled={true}
          onSnapToItem={(index) => {
            setActiveIndex(index);
          }}
          style={styles.carousel}
          scrollAnimationDuration={2000}
          renderItem={({ index, item }) => (
            <Image
              source={{
                uri: item.product,
              }}
              resizeMode='contain'
              style={styles.imageContainer}
            />
          )}
        />
        <View style={styles.pagination}>
          {images.map((item, index) => {
            return (
              <View
                style={{
                  ...styles.dot,
                  backgroundColor:
                    activeIndex === index ? 'black' : '#ADADAD99',
                }}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.upperDetails}>
        <View style={styles.upperDetailsRow}>
          <StylishText textType='bold' color='gray' fontSize={12}>
            Top Notes: Bergamot, Grape Fruit, Apple
          </StylishText>
          <View style={styles.badge}>
            <StylishText textType='bold' color='white' fontSize={11}>
              EXCLUSIVE
            </StylishText>
          </View>
        </View>
        <View style={styles.upperDetailsRow}>
          <StylishText
            textType='bold'
            color='black'
            fontSize={16}
            style={styles.detailText}>
            Royalty Eau de Parfum - 100ml
          </StylishText>
          <View style={styles.detailPrice}>
            <StylishText
              textType='bold'
              color='black'
              fontSize={20}
              style={{ textDecorationLine: 'line-through', marginRight: 10 }}>
              $140
            </StylishText>
            <StylishText textType='bold' color='#FF1476' fontSize={20}>
              ${talent?.cost}
            </StylishText>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.downDetails}>
        <View style={styles.downDetailsRow}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{
                uri: talent?.avatar_url,
              }}
              resizeMode='cover'
              resizeMethod='auto'
              style={styles.avatarContainer}
            />
            <View>
              <StylishText
                textType='bold'
                color='black'
                fontSize={15}
                style={styles.downDetailText}>
                By {talent?.name_en}
              </StylishText>
              <StylishText
                textType='semiBold'
                color='#2D2D2D'
                fontSize={13.5}
                style={styles.downDetailText}>
                Actors {'›'} Egypt
              </StylishText>
            </View>
          </View>
          <View style={styles.ratingNReview}>
            <View style={styles.rating}>
              <Icon size={18} name='star' color='#E77436' />
              <StylishText
                textType='bold'
                color='black'
                fontSize={13}
                style={{ marginLeft: 5 }}>
                4.9
              </StylishText>
            </View>
            <StylishText textType='semiBold' color='#2D2D2D' fontSize={12}>
              33 Reviews
            </StylishText>
          </View>
        </View>
        <View style={styles.description}>
          <StylishText
            textType='bold'
            color='black'
            fontSize={16}
            style={styles.downDetailText}>
            Description
          </StylishText>
          <StylishText
            textType='regular'
            color='#6a6a6a'
            fontSize={13}
            props={{ numberOfLines: 4 }}
            style={styles.descriptionText}>
            A perfume that captures hearts Details as a piece of arts Alters
            your mood and reality Feelings speak of its sensuality A perfume
            that captures hearts Details as a piece of arts Alters your mood and
            reality Feelings speak of its sensuality
          </StylishText>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.videoButton} onPress={() => {}}>
          <View style={styles.innerButton}>
            <VideoCam size={30} name='videocam-outline' color='white' />
            <StylishText
              fontSize={13}
              textType='bold'
              style={styles.cartButtonText}>
              ADD VIDEO REVIEW
            </StylishText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.cartButton,
            backgroundColor: inCart ? '#169d08' : '#FF1476',
          }}
          onPress={() => {
            // onAddToCartPress();
            setInCart(true);
          }}>
          <View style={styles.innerButton}>
            <Cart
              size={22}
              name={inCart ? 'check' : 'shopping-cart'}
              color='white'
            />
            <StylishText
              fontSize={13}
              textType='bold'
              style={styles.cartButtonText}>
              {inCart ? 'ADDED TO CART' : 'ADD TO CART'}
            </StylishText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartBottomSheet;
