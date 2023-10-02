import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.styles'
import dataCart from '../../data/dataCart'
import CartItem from './components/CartItem'

const Cart = () => {
  const renderItem = () => <CartItem />

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
        data={dataCart} 
        keyExtractor={item => item.id} 
        renderItem={renderItem}/>
      </View>
      <View>
        <Pressable>
          <Text style={styles.confirm}>
            Confirm
          </Text>
          <View>
            <Text style={styles.total}>{'Total $100'}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart