import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import styles from './CartItem.styles'
import { colors } from '../../../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image 
        style={styles.image}
        source={{
          uri: item.images[0],
        }}
        />
      </View>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        <View>
            <Text style={styles.cantidad}>{item.quantity}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
        <Pressable>
            <Feather name='trash' size={24} color= {colors.primary} />
        </Pressable>
      </View>
    </View>
  )
}

export default CartItem