import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import styles from '../style/styles.js';
import { NBR_OF_DICES, NBR_OF_THROWS, MAX_SPOT, MIN_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS} from "../constants/Game.js"


export default Home = ({ navigation }) => {

    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    // Check that the user has typed atleast one character.
    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    return (
        <View>
            
            <Header></Header>

            { !hasPlayerName
                ?
                <>
                    <Text style={styles.entryinfo}>Enter your name for the scoreboard pleaseeee:)</Text>

                    <TextInput style={styles.textinput} onChangeText={setPlayerName} autoFocus={true}></TextInput>

                    <Pressable style={({pressed}) => [{
                        backgroundColor: pressed ? 'rgb(41, 198, 167)' : 'white',
                         },styles.wrapperCustom,]}
                        onPress={() => handlePlayerName(playerName)}>
                        <Text style={styles.entryinfo}>OK</Text>
                    </Pressable>
                </>
                :
                <>
                    <Text style={styles.gameinfo}>Rules of the game here...
                    THE GAME: Upper section of the classic Yahtzee
                    dice game. You have {NBR_OF_DICES} dices and
                    for the every dice you have {NBR_OF_THROWS}
                    throws. After each throw you can keep dices in
                    order to get same dice spot counts as many as
                    possible. In the end of the turn you must select
                    your points from {MIN_SPOT} to {MAX_SPOT}.
                    Game ends when all points have been selected.
                    The order for selecting those is free.
                    POINTS: After each turn game calculates the sum
                    for the dices you selected. Only the dices having
                    the same spot count are calculated. Inside the
                    game you can not select same points from
                    {MIN_SPOT} to {MAX_SPOT} again.
                    GOAL: To get points as much as possible.
                    {BONUS_POINTS_LIMIT} points is the limit of
                    getting bonus which gives you {BONUS_POINTS}
                    points more.
                    </Text>
                    <Text style={styles.entryinfo}>Good luck, {playerName}!</Text>

                    <Pressable  style={({pressed}) => [{
                        backgroundColor: pressed ? 'rgb(41, 198, 167)' : 'white',
                         },styles.wrapperCustom,]}
                        onPress={() => navigation.navigate('Gameboard', {player: playerName})}>
                        <Text style={styles.entryinfo}>PLAY</Text>
                    </Pressable>
                </>
            }
            <Footer></Footer>
        </View>
    )
}