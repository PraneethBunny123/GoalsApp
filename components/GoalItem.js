import { StyleSheet, View, Text, Pressable } from "react-native"

export default function GoalItem({goalData, onDeleteItem}) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={() => onDeleteItem(goalData.item.id)}>
                <Text style={styles.goalText}>{goalData.item.text}</Text>                    
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})