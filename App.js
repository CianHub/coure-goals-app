import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState([]);
  const deleteGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setGoalText('');
    setShowModal(false);
  };

  const startAddGoalHandler = () => setShowModal(true);

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        onPress={startAddGoalHandler}
        color="#5e0acc"
      />
      {showModal && (
        <GoalInput
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          goalText={goalText}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                deleteGoalHandler={() => deleteGoalHandler(itemData.item.id)}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
