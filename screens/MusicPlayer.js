import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library'

export default class MusicPlayer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Music Player</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
