import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import decks from '../flashcards';
import DeckButton from './DeckButton';


const formatData = (decks) => {

    return decks;
};

const numColumns = 1;
export default class App extends React.Component {


    renderItem = ({ item, index }) => {
        return (
            <View
                style={styles.cointainer} >


                <DeckButton key={item.index}
                    title={item.name}
                    showDetail={() => this.showDetail(index)} //item.title

                />

            </View>
        );
    };


    showDetail = (id) => {
        this.props.navigation.navigate('DeckSettings', { id }); //DeckSettings
    };

    render() {
        return (

            <View style={styles.cointainer}>

                <FlatList style={styles.buttonContainer}
                    data={formatData(decks)}
                    style={styles.container}
                    renderItem={this.renderItem}
                    numColumns={numColumns}
                    keyExtractor={(item) => item.index}
                />

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

        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        width: "100%"
    },
    itemText: {
        color: 'black',
    },
    buttonContainer: {
        margin: 20,
        backgroundColor: '#a6a6a6',
        borderRadius: 8,
    },
});