import React from 'react'
import dataCategories from '../../data/dataCategories'
import { CategoryItem } from './Components'
import { Header } from '../../Components'
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native'
import styles from './Home.style'
import Counter from '../../Components/Counter'


const Home = ({  navigation}) => {
  return (
<SafeAreaView style={styles.container}>
  <Counter />
  <StatusBar animated={true} barStyle={'light-content'} />
  <Header title={'Shopping List'}/>
  <View style={styles.listContainer}>
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
    </SafeAreaView>
  )
}

export default Home

