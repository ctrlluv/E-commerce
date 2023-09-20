import { View, Text, Image } from 'react-native'
import {Header} from '../../Components'
import styles from './Details.style'

import React from 'react'

const Details = ({ route }) => {
  const {product} = route.params
  return (
    <View style={styles.container}>
      <Header title={'Details'}/>
     <Image style={styles.image} source={{ uri : product.images[0] }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
  <Text style={styles.price}>{`$ ${product.price}`}</Text>
    </View>
  )
}

export default Details