import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer} >
                <TextInput placeholder='Your goal'/>
                <Button title='Add Goal' />
            </View>
            <View>
                <Text>List of goals</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
    },
    inputContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    } 
});
