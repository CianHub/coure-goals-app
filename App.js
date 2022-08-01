import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 1,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'red',
          padding: 10,
        }}
      >
        Hi
      </Text>
      <Button
        title="Go to Details"
        onPress={() => {
          alert('hi');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
