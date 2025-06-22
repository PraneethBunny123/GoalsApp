import { View, StyleSheet, TextInput, Button } from "react-native"

export default function GoalInput({enteredGoalText, setEnteredGoalText, setGoals}) {

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
    )
}

const styles = StyleSheet.create({
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
})