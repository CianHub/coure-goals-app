import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';

export const GoalInput = ({ addGoalHandler, goalInputHandler, goalText }) => {
  return (
    <Modal>
      <View style={styles.inputContainer}>
        <TextInput
          value={goalText}
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});
