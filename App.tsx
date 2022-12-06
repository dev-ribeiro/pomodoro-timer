import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>POMODORO TIMER</Text>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder='Insira sua tarefa:'
          placeholderTextColor='#fff'
        />
        <Button color='#7fb16e' title='Iniciar' />
      </View>
      <View style={styles.timer}>
        <Text style={styles.counter}>00</Text>
        <Text style={styles.divider}>:</Text>
        <Text style={styles.counter}>00</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1e'
  },

  wrapper: {
    width: '100%',
    marginBottom: 32,
    padding: 16,
    backgroundColor: '#6b7280',
    borderRadius: 6
  },

  title: {
    marginBottom: 16,
    fontFamily: 'monospace',
    fontSize: 35,
    color: '#b1de44'
  },

  input: {
    padding: 2,
    marginBottom: 16,
    borderBottomColor: '#b1de44',
    borderBottomWidth: 1,
    fontSize: 18
  },

  timer: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 42,
  },

  divider: {
    marginLeft: 12,
    marginRight: 12,
    color: '#b1de44',
    fontSize: 42,
    fontWeight: 'bold'
  },

  counter: {
    fontFamily: 'sans-serif',
    fontSize: 64,
    color:'#fff'
  }
})
