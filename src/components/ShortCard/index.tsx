import styles from './style';
import { Image, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import StylishText from '../StylishText';
import AnimatedAvatar from '../AnimatedAvatar';

interface ShortCardProps {
  product?: any;
  onAddToCartPress?: () => void;
  setBadge?: (number) => void;
  setBadgeNum?: (boolean) => void;
  number?: number;
}

const ShortCard: React.FC<ShortCardProps> = ({
  product,
  onAddToCartPress,
  setBadge,
  setBadgeNum,
  number,
}) => {
  const [animate, setAnimate] = useState(true);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setBadgeNum(number + 1);
    setBadge(true);
    setAnimate(!animate);
    setAdded(true);
  };

  const handleRemoveToCart = () => {
    setBadgeNum(number - 1);
    setAnimate(!animate);
    setAdded(false);
  };

  return (
    <View
      style={{
        ...styles.card,
        backgroundColor: added ? 'white' : 'rgba(0,0,0,0.5)',
      }}>
      <TouchableOpacity
        onPress={onAddToCartPress}
        style={{
          width: '68%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {added && (
          <Image
            source={{
              uri: 'https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/green-checkmark-icon.png',
            }}
            resizeMode='cover'
            resizeMethod='auto'
            style={{
              ...styles.imageContainer,
              position: 'absolute',
              borderColor: 'white',
            }}
          />
        )}
        <AnimatedAvatar visible={animate}>
          <Image
            source={{
              uri: product?.avatar_url,
            }}
            resizeMode='cover'
            resizeMethod='auto'
            style={{
              ...styles.imageContainer,
              borderColor: '#FF1476',
            }}
          />
        </AnimatedAvatar>
        <View style={styles.details}>
          <StylishText
            fontSize={15}
            textType='bold'
            color={added ? 'black' : 'white'}
            style={styles.detailText}
            props={{ numberOfLines: 1 }}>
            #Eau de Parfum
          </StylishText>
          <StylishText
            fontSize={12}
            textType='regular'
            color={added ? 'black' : 'white'}
            style={styles.detailText}
            props={{ numberOfLines: 1 }}>
            Top Notes: Bergamot de monsieur
          </StylishText>
          <StylishText
            fontSize={15}
            textType='bold'
            color={added ? 'black' : 'white'}
            style={styles.detailText}
            props={{ numberOfLines: 1 }}>
            ${product?.converted_cost}
          </StylishText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={added ? handleRemoveToCart : handleAddToCart}>
        <StylishText
          fontSize={13}
          textType='bold'
          style={styles.cartButtonText}>
          {added ? 'REMOVE' : 'ADD TO CART'}
        </StylishText>
        <View style={styles.bar} />
      </TouchableOpacity>
    </View>
  );
};
export default ShortCard;
