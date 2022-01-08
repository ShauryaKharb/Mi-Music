import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'
import { Drawer } from 'react-native-material-drawer'
import { RFValue } from 'react-native-responsive-fontsize'

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droid} />

        <Drawer
          open={this.state.isOpen}
          // style={{ paddingRight: '40%' }}
          drawerContent={
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 30 }}>
                Drawer Contentuiehuikwsdjvyudvx ytjrsdxv usygt uytrcy
              </Text>
            </View>
          }
          onClose={() => this.setState({ isOpen: false })}
          animationTime={500}
          // width={RFValue(100)}
        >
          <View style={styles.body}>
            <View
              style={
                {
                  // marginTop: 20,
                  // width: '100%',
                  // flex: 1,
                }
              }
            >
              <Text style={{ marginBottom: 20 }}>This is a page</Text>
              <TouchableOpacity
                onPress={() => this.setState({ isOpen: !this.state.isOpen })}
              >
                <Text style={{ color: '#fff' }}>Toggle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Drawer>
      </View>
    )
  }
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
}
