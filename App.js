import React, { Component } from "react";
import {
  Text,
  StyleSheet,
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'

//custom files 
import SettingsScreen from './src/pages/SettingsScreen';
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';

export default class App extends Component {
  render() {
    return (
      <MyApp />
    )
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Text>
          Drawer Header
        </Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const MyApp = createDrawerNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen
  },
  Profile: {
    screen: ProfileScreen
  }
},
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
  }

);


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

});
