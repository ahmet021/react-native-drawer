import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from '../components/CustomHeader'

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Profile",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: () => null,
    header: null
  })
  render() {
    return (
      <Container>

        <CustomHeader title="Profile" drawerOpen={() => this.props.navigation.openDrawer()} />

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
          </Button>

        </Content>

      </Container>
    )
  }
}