import React from 'react';
import Card from './screens/Card';
import DeckHome from './screens/DeckHome';
import DeckSettings from './screens/DeckSettings';
import CreateDeck from './screens/CreateDeck';
import RenameDeck from './screens/RenameDeck';
import AddCard from './screens/AddCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Decks from './screens/Decks';


const AppNavigator = createStackNavigator({
  // Home: {
  //   TabNavigator
  //  },


  Home: Decks,
  Card: Card,
  DeckHome: DeckHome,
  DeckSettings: DeckSettings,
  CreateDeck: CreateDeck,
  AddCard: AddCard,
  RenameDeck: RenameDeck,
},

  {

    navigationOptions: {
      headerTintColor: 'white',
      title: 'Decks',
      headerStyle: {
        backgroundColor: 'grey'
      }
    }
  }


);



const TabNavigator = createBottomTabNavigator({

  Decks: {

    screen: AppNavigator

  },
  "Add Decks": {
    screen: CreateDeck,

  },


},


  {

    tabBarOptions: {


      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      activeTintColor: 'black',
      barStyle: { backgroundColor: '#grey' },
    }
  },

  AppNavigator.navigationOptions = {

    tabBarIcon: ({ tintColor }) =>
      (

        <Ionicons

          name="ios-bookmarks"
          size={25}
          color={tintColor} />
      )


  },


);

export default class App extends React.Component {

  render() {
    return (
      //<AppNavigator /> ,
      <TabNavigator />
    );
  }

}