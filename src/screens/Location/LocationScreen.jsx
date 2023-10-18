import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import styles from './location.style'
import { MapPreview } from '../../Components'


const LocationScreen = () => {
    const [location, setLocation] = useState({latitude: '', longitude: ''})
    const [error, setError] = useState('')

    useEffect(() => {
      (async() => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted') {
            setError('Permission to access location was denied')
            return
        }
        console.log(status)
        let location = await Location.getCurrentPositionAsync({})
        setLocation({
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
        })
      })()
    }, [])

  return (
    <View style={styles.container}>
      <Text>My adress</Text>
      {location ? (
      <View style={styles.withoutLocation}>
        <Text>
            Lat: ${location.latitude}, Longitude: {location.longitude}
            </Text>
            <MapPreview location={location} />
      </View>
      ) : (
      <View style={styles.withoutLocation}>
        <Text>{error}</Text>
        </View>
      )}
    </View>
  )
}

export default LocationScreen