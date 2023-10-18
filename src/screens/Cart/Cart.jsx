import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.styles'
import dataCart from '../../data/dataCart'
import CartItem from './components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopApi'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = () => {
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [triggerPost, result ] = usePostOrderMutation()

  const renderItem = ({item}) => <CartItem item={item} />


  const confirmCart = () => {
    triggerPost({total, cart, user: 'LoggedUser'})
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
        data={cart} 
        keyExtractor={item => item.id} 
        renderItem={renderItem}/>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={confirmCart}>
          <Text style={styles.confirm}>Confirm</Text>
          <View>
            <Text style={styles.total}>{`Total ${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
    
  )
}

export default Cart