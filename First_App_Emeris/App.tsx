import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>Enter your name!</Text>
      <TextInput placeholder='Jane'/>
      <Text>Enter your surname!</Text>
      <TextInput placeholder='Doe'/>
      <StatusBar style="auto" />
      
      <Button title='Add User'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7aa7ca',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
