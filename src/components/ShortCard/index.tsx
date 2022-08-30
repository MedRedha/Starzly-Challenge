import styles from './style';
import { Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import StylishText from '../StylishText';

interface ShortCardProps {
  product?: any;
  onAddToCartPress?: () => void;
}

const ShortCard: React.FC<ShortCardProps> = ({ product, onAddToCartPress }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: product?.avatar_url,
        }}
        resizeMode='cover'
        resizeMethod='auto'
        style={styles.imageContainer}
      />
      <View style={styles.details}>
        <StylishText
          fontSize={15}
          textType='bold'
          style={styles.detailText}
          props={{ numberOfLines: 1 }}>
          ${product?.converted_cost}
        </StylishText>
        <StylishText
          fontSize={15}
          textType='bold'
          style={styles.detailText}
          props={{ numberOfLines: 1 }}>
          #Eau de Parfum
        </StylishText>
        <StylishText
          fontSize={10}
          textType='regular'
          style={styles.detailText}
          props={{ numberOfLines: 1 }}>
          Top Notes: Bergamot de monsieur
        </StylishText>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={onAddToCartPress}>
        <StylishText
          fontSize={13}
          textType='bold'
          style={styles.cartButtonText}>
          ADD TO CART
        </StylishText>
        <View style={styles.bar} />
      </TouchableOpacity>
    </View>
  );
};
export default ShortCard;
