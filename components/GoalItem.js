import { StyleSheet, View, Text } from "react-native"

export default function GoalItem({goalData}) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{goalData.item.text}</Text>                    
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    goalText: {
        color: 'white'
    }
})