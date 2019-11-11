import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import decks from '../flashcards';

export default class Card extends React.Component {

    constructor() {

        super();

        this.state = {

            status: false,
            totalQuestions: 0,
            currentCard: 0,
            totalCorrect: 0,
            totalIncorrect: 0,
            right: [],
            wrong: [],
            showResults: false,
            showAnswer: false,
            addFront: '',
            addBack: '',
            addDeck: '',
            renameDeck: '',

        }
    }

    deleteCard() {
        decks[this.props.navigation.getParam('id')].cards.shift();
        if (this.state.currentCard + 1 >= decks[this.props.navigation.getParam('id')].cards.length) {
            this.setState({ showResults: true });
            this.rearrangeCards();
            return;
        }

        this.setState({ showAnswer: false, time: Date.now() });
    }


    rearrangeCards() {

        this.state.wrong.sort(function (a, b) {
            return b.time - a.time;
        });
        this.state.right.sort(function (a, b) {
            return b.time - a.time;
        });


        decks[this.props.navigation.getParam('id')].cards = this.state.wrong.concat(this.state.right);

        this.setState({ wrong: [], right: [] });
    }


    inputAnswer = (answer) => {

        let card = decks[this.props.navigation.getParam('id')].cards[this.state.currentCard];
        card.time = this.state.time;
        switch (answer) {
            case 'right':
                this.setState({
                    totalCorrect: this.state.totalCorrect + 1, showAnswer: false, time: Date.now()
                },
                );

                this.state.right.push(card);
                break;
            case 'wrong':
                this.setState(
                    { totalIncorrect: this.state.totalIncorrect + 1, showAnswer: false, time: Date.now() }
                );
                this.state.wrong.push(card);


                break;
        }

        if (this.state.currentCard + 1 >= decks[this.props.navigation.getParam('id')].cards.length) {
            this.setState({ showResults: true });
            this.rearrangeCards();
            return;
        }




        this.setState({ currentCard: this.state.currentCard + 1, showAnswer: false });
    };


    ShowHideAnswer = () => {

        this.setState(state => ({

            showAnswer: !state.showAnswer

        }));
    }




    render() {

        const id = this.props.navigation.getParam('id')


        if (this.state.showResults) {
            return (

                <View style={styles.container}>
                    <View style={{ margin: 20 }}>
                        <Text style={styles.title}>
                            {this.state.totalCorrect} Correct out of {decks[this.props.navigation.getParam('id')].cards.length}


                        </Text>

                    </View>
                    <View style={styles.item}>
                        <Button
                            title="Back to deck and start again!"
                            color="black"
                            onPress={() => this.props.navigation.goBack()} />
                    </View>



                </View>
            );


        } if (decks[this.props.navigation.getParam('id')].cards.length == 0) {

            return (

                <View style={styles.container}>

                    <Text>

                        The deck is empty! You have to add new cards!

                </Text>

                    <View style={styles.item}>
                        <Button
                            title="Add new Card"
                            color="black"
                            onPress={() => this.props.navigation.navigate('AddCard', { id })} />
                    </View>


                </View>

            );

        }
        else {

            return (


                <View style={styles.container}>

                    <Text style={styles.title}>
                        {decks[this.props.navigation.getParam('id')].cards[this.state.currentCard].front}</Text>

                    <Text style={styles.title}>
                        Question number {[this.state.currentCard + 1]} of {decks[this.props.navigation.getParam('id')].cards.length}</Text>

                    <View style={styles.item}>
                        <Button
                            title={'Flip the card!'}
                            color="black"
                            onPress={this.ShowHideAnswer}
                        />
                    </View>

                    <View>
                        {
                            this.state.showAnswer ?
                                <Text style={styles.body}> {decks[this.props.navigation.getParam('id')].cards[this.state.currentCard].back} </Text> : null

                        }


                    </View>

                    <View style={styles.buttonTrue}>
                        <Button
                            title="Right"
                            color="black"
                            onPress={() => this.inputAnswer('right')}

                        />
                    </View>
                    <View style={styles.buttonFalse}>
                        <Button
                            title="Wrong"
                            color="black"
                            onPress={() => this.inputAnswer('wrong')}
                        />

                    </View>

                    <View style={styles.buttonDelete}>
                        <Button
                            title="Delete the card"
                            color="black"
                            onPress={() => this.deleteCard()}

                        />
                    </View>
                </View>


            );
        }



    }
}

const styles = StyleSheet.create({

    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
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

    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 15,
        fontWeight: 'bold',
    },
    body: {
        justifyContent: 'center',
        textAlign: 'left',
        fontSize: 15,
        backgroundColor: '#ffece5',
        margin: 10,

    },
    buttonContainer: {
        margin: 20,
        backgroundColor: '#a6a6a6',
        borderRadius: 8,
    },

    buttonTrue: {

        textAlign: 'center',
        margin: 10,
        backgroundColor: '#63d863',
        borderRadius: 8,
        width: "40%",
        position: 'absolute',
        bottom: 90,
        left: 15,
    },

    buttonFalse: {

        textAlign: 'center',
        margin: 10,
        backgroundColor: '#af3433',
        borderRadius: 8,
        width: "40%",
        position: 'absolute',
        bottom: 90,
        left: 205,
    },
    buttonDelete: {

        textAlign: 'center',
        margin: 10,
        backgroundColor: '#af3433',
        borderRadius: 8,
        width: "40%",
        position: 'absolute',
        bottom: 30,
        left: 15,
        width: 355,
    },
});

