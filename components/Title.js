import { View, Text, StyleSheet } from 'react-native'


export function Title() {
  return (
    <View>

      <Text style={styles.noronha}>Ben-Vindo a Fernando de Noronha</Text>

      <Text style={styles.fernando}>Descubra o paraíso das praias intocadas e águas cristalinas </Text>

    </View>
    
  )
}

const styles = StyleSheet.create({

  noronha: {

    fontSize: 24,

    color: '#ffffff',

    textAlign: 'center',

    fontWeight: 'bold',

    backgroundColor: '#018002',

    paddingBottom: 15,

    paddingTop: 15,

  },
  fernando: {
    
    marginLeft: 10,
  }
})