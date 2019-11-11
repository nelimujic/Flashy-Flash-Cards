import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, Alert } from 'react-native';
//import decks from './flashcards.js';
import decks from '../flashcards';
import Constants from 'expo-constants';


export default class DeckSettings extends React.Component {

    onStartQuiz = () => {
        this.props.navigation.navigate('Card', { id: this.props.id });
    };

    state = {

        id: this.props.navigation.getParam('id'),
    }


    render() {

        const id = this.props.navigation.getParam('id')

        return (

            <View style={styles.cointainer}>


                <View style={styles.item} >

                    <Button
                        title="Start Quiz"
                        color="black"
                        onPress={() => this.props.navigation.navigate('Card', { id })}
                    />

                </View>

                <View style={styles.item}>
                    <Button
                        title="Add a card"
                        color="black"
                        onPress={() => this.props.navigation.navigate('AddCard', { id })}
                    />
                </View>

                <View style={styles.item}>
                    <Button
                        title="Delete the deck"
                        color="black"

                        onPress={() => {
                            decks.splice(this.props.navigation.getParam('id'), 1);
                            alert('You deleted the deck!');
                            this.props.navigation.navigate('Home');
                        }
                        }

                    />

                </View>

                <View style={styles.item}>
                    <Button
                        title="Rename the deck"
                        color="black"
                        onPress={() => this.props.navigation.navigate('RenameDeck', { id })}

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
        textAlign: 'center',
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
