import {
  Image,
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
} from 'react-native';

export const GoalInput = ({
  addGoalHandler,
  goalInputHandler,
  goalText,
  showModal,
  endAddGoalHandler,
}) => {
  return (
    <Modal visible={showModal} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          value={goalText}
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.inputButtons}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={endAddGoalHandler}
              color="#f31383"
            />
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
    padding: 16,
    backgroundColor: '#311b6b',
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
    width: '100%',
    padding: 8,
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120138',
    borderColor: '#e4d0ff',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
