import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './Components'
import { Header } from '../../Components'
import { View, FlatList } from 'react-native'
import styles from './Home.style'

const Home = ({  navigation}) => {
  return (

<View style={styles.container}>
  <Header title={'Shopping List'}/>
      <FlatList
       data={dataCategories}
       keyExtractor={category => category}
       renderItem={({ item }) => (
        <CategoryItem
         category={item}
         navigation={navigation}
         />
       )}
      /> 
    </View>
  )
}

export default Home

