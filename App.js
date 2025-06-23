import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    function handleModalButton() {
        setIsModalVisible(true)
    }

    function handleDeleteGoal(id) {
        const filteredGoals = goals.filter(goal => goal.id !== id) 
        setGoals(filteredGoals)   
        console.log('deleted: '+ id)    
    }

    return (
        <View style={styles.appContainer}>
            <Button 
                title='Add New Goal' 
                color='#5e08cc'
                onPress={handleModalButton}
            />
            <GoalInput setGoals={setGoals} />
            <View style={styles.goalsContainer}>
                <FlatList 
                    data={goals} 
                    renderItem={goalData => {
                        return (
                            <GoalItem 
                                goalData={goalData} 
                                onDeleteItem={handleDeleteGoal}    
                            />
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
    goalsContainer: {
        flex: 4
    },
});
