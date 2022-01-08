import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import MusicComponent from './MusicComponent'
import { FlatList } from 'react-native-gesture-handler'

let musics = require('../example.json')

export default class MusicList extends React.Component {
  constructor() {
    super()
    this.state = {
      gotMusic: false,
      allMusic: [],
      filename: [],
      uri: [],
      duration: [],
    }
  }
  getFiles = async () => {
    const permission = await MediaLibrary.getPermissionsAsync()
    if (permission.granted) {
      this.getMusic()
    } else {
      await MediaLibrary.requestPermissionsAsync()
    }
  }

  getMusic = async () => {
    let media = null
    media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
      first: 300,
    })

    if (media !== null) {
      this.setState({ gotMusic: true })
      this.state.allMusic.pop()
      media.assets.map((x) => {
        var filename = x.filename.slice(0, -4)
        var uri = x.uri
        var time = Math.round(x.duration)
        var minutes =
          Math.floor(time / 60) < 10
            ? '0' + Math.floor(time / 60)
            : Math.floor(time / 60)

        var seconds =
          time - minutes * 60 < 10
            ? time - minutes * 60 < 1
              ? '01'
              : '0' + (time - minutes * 60)
            : time - minutes * 60

        var duration = minutes + ':' + seconds

        // duration = Math.round(this.props.xyz.duration)
        // this.setState({ duration: duration })

        this.state.allMusic.push({
          filename: filename,
          uri: uri,
          duration: duration,
        })
        // console.log(this.state.allMusic)
      })
      // console.log('this.state.allMusic')
      // console.log(this.state.allMusic)
    }
  }

  renderItem = ({ item: music }) => {
    // console.log(musics)
    return <MusicComponent xyz={music} />
  }

  componentDidMount() {
    this.getFiles()
    musics.assets.map((x) => this.state.allMusic.push({ nothing: x }))
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    if (this.state.allMusic === []) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size={80} color={'#000'} />
        </View>
      )
    } else if (this.state.allMusic !== [] && this.state.filename !== []) {
      return (
        <View style={styles.container}>
          <View style={styles.x}>
            <Text>Music List</Text>
          </View>
          <View style={styles.flatList}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.allMusic}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      )
    } else if (this.state.allMusic !== [] && this.state.filename === []) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size={80} color={'#fff'} />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  x: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcb',
  },
  flatList: {
    flex: 0.85,
    backgroundColor: '#ef5',
    // alignItems: 'center',
    justifyContent: 'center',
  },
})
