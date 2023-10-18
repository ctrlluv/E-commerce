import React from 'react'
import { CategoryItem } from './Components'
import { Header } from '../../Components'
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native'
import styles from './Home.style'
import { useGetCategoriesQuery } from '../../services/shopApi'



const Home = ({  navigation}) => {
  const { data, isLoading } = useGetCategoriesQuery()
  return (
<SafeAreaView style={styles.container}>
  <StatusBar animated={true} barStyle={'light-content'} />
  <Header title={'Shopping List'}/>
  <View style={styles.listContainer}>
    {!isLoading && (
      <FlatList
       data={data}
       keyExtractor={category => category}
       renderItem={({ item }) => (
        <CategoryItem
         category={item}
         navigation={navigation} />
       )}
         />
       )}
  
    </View> 
    </SafeAreaView>
  )
}

export default Home

