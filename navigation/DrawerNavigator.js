import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  useWindowDimensions,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MusicPlayer from '../screens/MusicPlayer'
import TabNavigator from './TabNavigator'
import MusicComponent from '../screens/MusicComponent'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  const dimensions = useWindowDimensions()

  const isLargeScreen = dimensions.width >= 768

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droid} />
      <MusicComponent screen={dimensions.width} />
      <Drawer.Navigator
        drawerContent={() => {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
              }}
            >
              <Text style={{ color: '#f0f', fontSize: 30 }}>
                Drawer Contentuiehuikwsdjvyudvx ytjrsdxv usygt uytrcy
              </Text>
            </View>
          )
        }}
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                style={styles.icon}
                name="book"
                size={RFValue(25)}
                color={color}
              />
            )
          },
          drawerType: isLargeScreen ? 'permanent' : 'slide',
        })}
      >
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="MusicPlayer" component={MusicPlayer} />
      </Drawer.Navigator>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '200%',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ee',
    // width: '100%',
    // marginLeft:'100%'
  },
  droid: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
  },
  icon: {
    width: RFValue(25),
    height: RFValue(25),
  },
}
