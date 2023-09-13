import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './Components'
import { Header } from '../../Components'
import { View, FlatList } from 'react-native'
import styles from './Home.style'

const Home = ({setCategorySelected}) => {
  return (

<View style={styles.container}>
  <Header title={'Shopping List'}/>
      <FlatList
       data={dataCategories}
       keyExtractor={category => category}
       renderItem={({ item }) => (
        <CategoryItem
         category={item}
         setCategorySelected={setCategorySelected}
         />
       )}
      /> 
    </View>
  )
}

export default Home

