import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'
import styles from './Details.style'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { colors } from '../../constants/colors'
import { addItem } from '../../features/cart/cartSlice'


const Details = ({ route }) => {
  const dispatch = useDispatch ()
  const {product} = route.params
  const handleAddToCart = () => {
    dispatch(addItem({...product, quantity: 1}))
  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
     <Image 
     style={styles.image} 
     source={{ uri : product.images[0] }} 
     resizeMode='cover'
     />
    </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
      <Pressable onPress={handleAddToCart}>
        <Text style={styles.buttonAdd}>Add to cart</Text>
      </Pressable>
      </SafeAreaView>
  )
}

export default Details