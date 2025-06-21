import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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
            <ScrollView style={styles.goalsContainer}>
                {goals.map(goal => (
                    <View 
                        key={goal}
                        style={styles.goalItem}    
                    >
                        <Text style={styles.goalText}>{goal}</Text>                    
                    </View>
                ))}
            </ScrollView>
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
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    goalText: {
        color: 'white'
    }
});
