import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { styles } from '../styles/styles';
import Header from '../components/Header';
import { products } from '../data/productsData';
import ProductDetails from '../components/ProductDetails';

const HomeScreen = ({navigation}) => {

    const [selectedProduct, setSelectedProduct] = useState(null);

    const openProductPopup = (product) => {
        setSelectedProduct(product);
    };

    const closeProductPopup = () => {
        setSelectedProduct(null);
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.containerBis}>
                <Header navigation={navigation} />

                <Text style={styles.containerTitle}>Bienvenue</Text>
        
                <TouchableOpacity>
                    <Image style={styles.hero} source={require('../assets/images/hero-image.jpg')} />
                </TouchableOpacity>

                <View style={styles.productContainer}>
                    {products.map((product) => (
                        <TouchableOpacity key={product.id} style={styles.productCard} onPress={() => openProductPopup(product)}>
                            <Image style={styles.productImage} source={product.image} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>{product.price} XPF</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Modal visible={selectedProduct !== null} animationType="slide">
                    <View style={styles.productPopup}>
                        {selectedProduct && (
                            <ProductDetails product={selectedProduct} onClose={closeProductPopup} />
                        )}
                    </View>
                </Modal>
            </View>
    
        </ScrollView>
    );
}

export default HomeScreen;