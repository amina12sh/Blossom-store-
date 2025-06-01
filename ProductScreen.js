import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const products = [
  { id: '1', name: 'سوار لؤلؤ', price: '25$', image: 'https://example.com/bracelet.jpg' },
  { id: '2', name: 'قلادة ورد', price: '30$', image: 'https://example.com/necklace.jpg' },
  // أضيفي منتجاتك هنا
];

export default function ProductScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:10, backgroundColor:'#fff' },
  card: { marginBottom:15, backgroundColor:'#f9f9f9', borderRadius:8, padding:10, alignItems:'center' },
  image: { width:100, height:100, borderRadius:8, marginBottom:8 },
  name: { fontSize:18, color:'#000', fontWeight:'600' },
  price: { fontSize:16, color:'#555' },
});