import { useState } from "react"
import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native"

export default function GoalInput({setGoals, isModalVisible, closeModal}) {

    const [enteredGoalText, setEnteredGoalText] = useState('')
    
    function handleTextInput(enteredText) {
        setEnteredGoalText(enteredText)
    }
    
    function handleButtonClick() {
        setGoals(prevState => ([
            ...prevState, 
            {text: enteredGoalText, id: Math.random().toString()}
        ]))
        setEnteredGoalText('')
        closeModal()
    }


    return (
        <Modal visible={isModalVisible} animationType="slide">
            <View style={styles.inputContainer} >
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    value={enteredGoalText}
                    style={styles.textInput} 
                    placeholder='Your goal'
                    onChangeText={handleTextInput}    
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={handleButtonClick} color='#b180f0' />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={closeModal} color='#f31282' />
                    </View>    
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: '#120438',
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})