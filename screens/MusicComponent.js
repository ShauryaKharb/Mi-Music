import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Audio } from 'expo-av'

let music = false

export default class MusicComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      screen: null,
      isPlaying: false,
      sound: null,
      status: null,
      duration: null,
    }
  }

  playSound = async () => {
    if (this.state.sound === null ) {
      const sound = new Audio.Sound()
      const status = await sound.loadAsync(
        {
          uri: this.props.xyz.uri,
        },
        { shouldPlay: true },
      )

      return this.setState({ ...this.state, sound: sound, status: status })
    }

    if (this.state.status.isLoaded && this.state.status.isPlaying) {
      const status = await this.state.sound.setStatusAsync({
        shouldPlay: false,
      })

      return this.setState({ ...this.state, status: status })
    }

    if (this.state.status.isLoaded && !this.state.status.isPlaying) {
      const status = await this.state.sound.setStatusAsync({
        shouldPlay: true,
      })
      return this.setState({ ...this.state, status: status })
    }
    // else {
    //   await sound.playAsync().then(() => {
    //   this.setState({ isPlaying: true })
    //   alert('Playing ' + this.props.xyz.filename)
    //   await sound.unloadAsync()
    //   })
    // }
  }

  componentDidMount() {
    let screen = this.props.screen
    this.setState({ screen: screen })
  }

  render() {
    music = this.props.xyz
    if (music) {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.imageButton} onPress={this.playSound}>
            <Ionicons
              style={styles.icon}
              name="md-musical-notes-outline"
              size={RFValue(25)}
              color={'#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.textButton]}
            onPress={this.playSound}
          >
            <Text style={styles.text}>{this.props.xyz.filename}</Text>
            <Text style={styles.text}>{this.props.xyz.duration}</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return <View style={styles.container}></View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00f',
    // width: '100%',
    flexDirection: 'row',
    borderRadius: RFValue(5),
    margin: RFValue(2),
  },
  imageButton: {
    flex: 0.1,
    padding: RFValue(10),
    // backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '30%',
  },
  textButton: {
    flex: 0.9,
    padding: RFValue(10),
    // backgroundColor: '#001',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: RFValue(30),
    height: RFValue(30),
    margin: RFValue(10),
  },
  text: {
    color: '#fff',
    textAlign: 'left',
  },
})
