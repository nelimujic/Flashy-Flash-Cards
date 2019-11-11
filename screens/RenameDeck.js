import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import decks from '../flashcards';

export default class RenameDeck extends React.Component {

    handleChange = (data) => {
        this.setState(data);
    }

    render() {

        return (


            <View style={styles.cointainer}>
                <Text style={styles.title}>

                    Rename the deck: {decks[this.props.navigation.getParam('id')].name}

                </Text>
                <Text style={styles.title}>

                    Enter a new name for the deck:

                </Text>


                <TextInput
                    style={styles.input}
                    //  value={this.state.front}
                    onChangeText={value => this.handleChange({ title: value })}
                />

                <View style={styles.item}>
                    <Button
                        title="Rename the deck"
                        color="black"
                        onPress={() => {

                            decks[this.props.navigation.getParam('id')].name = this.state.title;
                            alert('You renamed the deck!');
                            this.props.navigation.navigate('Home');


                        }

                        }

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
