import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [goals, setGoals] = useState([])

    function handleTextInput(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function handleButtonClick() {
        setGoals(prevState => ([...prevState, enteredGoalText]))
        setEnteredGoalText('')
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer} >
                <TextInput 
                    value={enteredGoalText}
                    style={styles.textInput} 
                    placeholder='Your goal'
                    onChangeText={handleTextInput}    
                />
                <Button 
                    title='Add Goal' 
                    onPress={handleButtonClick}    
                />
            </View>
            <View style={styles.goalsContainer}>
                {goals.map(goal => (
                    <Text key={goal}>{goal}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 4
    }
});
