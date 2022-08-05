import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';
StatusBar;

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
    endAddGoalHandler();
  };

  const startAddGoalHandler = () => setShowModal(true);

  const endAddGoalHandler = () => setShowModal(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color="#a065f3"
        />

        <GoalInput
          showModal={showModal}
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          goalText={goalText}
          endAddGoalHandler={endAddGoalHandler}
        />

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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
});
