import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const productsData = [
  { id: 1, name: 'Product 1', price: '$203', image: require('./p1.jpg') },
  { id: 2, name: 'Product 2', price: '$256', image: require('./p2.jpg') },
  { id: 3, name: 'Product 3', price: '$20', image: require('./p3.jpg') },
  { id: 4, name: 'Product 4', price: '$25', image: require('./p4.jpg') },
  { id: 5, name: 'Product 1', price: '$280', image: require('./p5.jpg') },
  { id: 6, name: 'Product 2', price: '$5', image: require('./p6.jpg') },
  { id: 7, name: 'Product 1', price: '$270', image: require('./p7.jpg') },
  { id: 8, name: 'Product 2', price: '$35', image: require('./p8.jpg') },
  { id: 9, name: 'Product 1', price: '$280', image: require('./p9.jpg') },
  { id: 10, name: 'Product 2', price: '$50', image: require('./p10.jpg') },
  { id: 11, name: 'Product 1', price: '$70', image: require('./p11.jpg') },
  { id: 12, name: 'Product 2', price: '$79', image: require('./p12.jpg') },

];

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image style={styles.productImage} resizeMode="cover" source={item.image} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => removeFromCart(item.id)}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Cart</Text>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  productContainer: {
    flexBasis: '48%',
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 4,
  },
  addToCartButton: {
    marginTop: 8,
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  cartContainer: {
    marginTop: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: 'white',
  },
});

export default Dashboard;
