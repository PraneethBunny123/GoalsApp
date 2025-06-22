import { View, StyleSheet, TextInput, Button } from "react-native"

export default function GoalInput() {
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
})