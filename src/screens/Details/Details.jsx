import { View, Text, Image, SafeAreaView } from 'react-native'
import styles from './Details.style'
import { useSelector } from 'react-redux'
import React from 'react'
import Counter from '../../Components/Counter'
import { colors } from '../../constants/colors'


const Details = ({ route }) => {
  const counter = useSelector(state => state.counter.value)
  const {product} = route.params
  return (
    <View style={styles.container}>
     <Image 
     style={styles.image} 
     source={{ uri : product.images[0] }} 
     resizeMode='cover'
     />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
      <Text style={{fontSize: 50, color: colors.secondary}}>{counter}</Text>
      <Counter />
    </View>
  )
}

export default Details