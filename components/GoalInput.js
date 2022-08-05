import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';

export const GoalInput = ({
  addGoalHandler,
  goalInputHandler,
  goalText,
  showModal,
}) => {
  return (
    <Modal visible={showModal} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <TextInput
          value={goalText}
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.inputButtons}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  inputButtons: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
