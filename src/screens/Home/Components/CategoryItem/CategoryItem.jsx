import { Pressable, Text, useWindowDimensions, View, Image } from 'react-native'

import {Card } from '../../../../Components'
import React, { useEffect } from 'react'
import styles from './CategoryItem.style'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../../../features/shop/shopSlice'

const CategoryItem = ({ category, navigation }) => {
   const dispatch = useDispatch()
   return (
    <Pressable 
    onPress={() => {
      dispatch(setCategorySelected(category))
      navigation.navigate('Products', {category})}}
    style={styles.container}
    >
        <Card style={styles.cardContainer}>
           <Text style={styles.text}>{category}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem

