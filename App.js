import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [goals, setGoals] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    function handleModalButton() {
        setIsModalVisible(true)
    }

    function closeModal() {
        setIsModalVisible(false)
    }

    function handleDeleteGoal(id) {
        const filteredGoals = goals.filter(goal => goal.id !== id) 
        setGoals(filteredGoals)   
    }

    return (
        <View style={styles.appContainer}>
            <Button 
                title='Add New Goal' 
                color='#a065ec'
                onPress={handleModalButton}
            />
            <GoalInput 
                isModalVisible={isModalVisible}   
                closeModal={closeModal} 
                setGoals={setGoals} 
            />
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
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 4
    },
});
