import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products'
import styles from './Products.style'
import { Header, SearchInput } from '../../Components'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'

const Products = ({ navigation }) => {
  const category = useSelector(state => state.shop.categorySelected)
  const [keyword, setKeyword] = useState('')
  const { data, isLoading } = useGetProductsByCategoryQuery(category)
  

  useEffect(() => {
   if (data) {
      const productsFiltered = data.filter(product => 
      product.title.includes(keyword)
      )
  
   } 
  }, [])

  return (
    <View style={styles.container}>
      <Header title={category}/>
      <SearchInput onSearch={setKeyword}/>
      <View style={styles.listContainer}>
        {!isLoading && (
        <FlatList 
          data={Object.values(data)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {product: item})}>
              <Text style={styles.item}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        )}
      </View>
    </View>
  )
}

export default Products

