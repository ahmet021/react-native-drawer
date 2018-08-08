import React, { Component } from "react";
import {
  Text,
  StyleSheet
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 
import CustomHeader from '../components/CustomHeader';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    header: null
  })


  render() {
    return (

      <Container>

        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
          </Button>

          <Button
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('Profile')} full>
            <Text style={{ color: 'white' }}>Go To Profile Screen</Text>
          </Button>

        </Content>

      </Container>

    )
  }

}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});