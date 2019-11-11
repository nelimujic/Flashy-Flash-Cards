import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';


function Separator() {
    return <View style={styles.separator} />;
}


export default class Decks extends React.Component {


    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.title}>
                    Welcome to Flashy Flash Cards!</Text>

                <Separator />
                <View style={styles.buttonContainer}>
                    <Button
                        title="CHOOSE YOUR DECK!"
                        color="black"
                        onPress={() => this.props.navigation.navigate('DeckHome')}
                    />
                </View>
                <Separator />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#ffece5',
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 23,
        fontWeight: 'bold',
    },

    buttonContainer: {
        margin: 20,
        backgroundColor: '#a6a6a6',
        borderRadius: 8,
    },
    separator: {
        marginVertical: 4,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

});
