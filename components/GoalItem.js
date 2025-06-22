export default function GoalItem() {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{goalData.item.text}</Text>                    
        </View>
    )
}