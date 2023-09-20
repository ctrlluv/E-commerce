import { Pressable, Text, useWindowDimensions, View, Image } from 'react-native'

import {Card } from '../../../../Components'
import React, { useEffect } from 'react'
import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation }) => {
   return (
    <Pressable 
    onPress={() => navigation.navigate('Products', {category})}
    style={styles.container}
    >
        <Card style={styles.cardContainer}>
           <Text style={styles.text}>{category}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem

