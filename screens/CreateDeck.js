import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import decks from '../flashcards';

export default class CreateDeck extends React.Component {

    static navigationOptions = {



        tabBarIcon: ({ focused, tintColor }) =>
            (

                <Ionicons

                    name="ios-add-circle-outline"
                    size={25}
                    color={tintColor} />
            )



    };

    handleChange = (data) => {
        this.setState(data);
    }


    render() {

        return (

            <View style={styles.cointainer}>
                <Text style={styles.title}>

                    Add a new deck!
  
                </Text>
                <Text style={styles.title}>

                    Name:
 
                </Text>


                <TextInput
                    style={styles.input}
                    onChangeText={value => this.handleChange({ addDeck: value })}
                />


                <View style={styles.item}>
                    <Button
                        title="Add Deck"
                        color="black"
                        onPress={() => {

                            decks.push({
                                name: this.state.addDeck,
                                cards: [],
                            }

                            )
                            alert('You added the deck!');
                            this.props.navigation.navigate('Home');

                        }}

                    />


                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({

    cointainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffece5',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 15,
        fontWeight: 'bold',
    },

    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 10,
        width: "70%"
    },

    item: {
        alignSelf: 'stretch',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        margin: 20,
        color: "black",
    },


});

