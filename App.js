import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [goals, setGoals] = useState([])

    function handleTextInput(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function handleButtonClick() {
        setGoals(prevState => ([
            ...prevState, 
            {text: enteredGoalText, id: Math.random().toString()}
        ]))
        setEnteredGoalText('')
    }

    return (
        <View style={styles.appContainer}>
            
            <View style={styles.goalsContainer}>
                <FlatList 
                    data={goals} 
                    renderItem={goalData => {
                        return (
                            <GoalItem goalData={goalData} />
                        )
                    }}  
                    keyExtractor={(item, index) => item.id}  
                />
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
});
