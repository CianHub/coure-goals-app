import { Text, View, StyleSheet, Pressable } from 'react-native';

export const GoalItem = ({ itemData, deleteGoalHandler }) => {
  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
