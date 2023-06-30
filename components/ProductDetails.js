import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductDetails = ({ product, onClose }) => {

  return (
    <View style={styles.productPopup}>
        <TouchableOpacity onPress={onClose} style={styles.productPopupCloseButton}>
            <FontAwesome name="times" size={20} color="#eab317" />
        </TouchableOpacity>
        <Text style={styles.productPopupTitle}>{product.name}</Text>
        <Text style={styles.productPopupPrice}>{product.price} XPF</Text>
        <Image style={styles.productPopupImage} source={product.image} />
        <Text style={styles.productPopupDescription}>{product.description}</Text>
        <TouchableOpacity style={styles.productPopupAddToCart}>
            <FontAwesome name="shopping-cart" size={20} color="white" />
            <Text style={styles.productPopupAddToCartText}>Ajouter au panier</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;