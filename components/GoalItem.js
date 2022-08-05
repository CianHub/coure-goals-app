import { Text, View, StyleSheet, Pressable } from 'react-native';

export const GoalItem = ({ itemData, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => {
          if (pressed) {
            return styles.goalItemPressed;
          }
        }}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  goalItemPressed: {
    opacity: 0.5,
    backgroundColor: '#5e08cc',
  },
});
