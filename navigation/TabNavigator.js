import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MusicList from '../screens/MusicList'
import MusicPlayer from '../screens/MusicPlayer'

export default class TabNavigator extends React.Component {
  render() {
    var Tab = createMaterialBottomTabNavigator()

    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.barStyle}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'MusicList') {
              iconName = focused
                ? 'ios-musical-note'
                : 'ios-musical-note-outline'
            } else if (route.name === 'MusicPlayer') {
              iconName = focused
                ? 'md-musical-notes'
                : 'md-musical-notes-outline'
            }
            return (
              <Ionicons
                style={styles.icon}
                name={iconName}
                size={RFValue(25)}
                color={color}
              />
            )
          },
        })}
        activeColor={'tomato'}
        inactiveColor={'white'}
      >
        <Tab.Screen name="MusicList" component={MusicList} />
        <Tab.Screen name="MusicPlayer" component={MusicPlayer} />
      </Tab.Navigator>
    )
  }
}
// file:///storage/emulated/0/Android/media/com.google.android.gm/Notifications/Calm/Calm.ogg

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#000',
    height: '10%',
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    overflow: 'hidden',
    position: 'absolute',
  },
  icon: {
    width: RFValue(25),
    height: RFValue(25),
  },
})
