import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setGoalText('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={goalText}
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
});
