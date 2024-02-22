import { View, Text, StyleSheet } from 'react-native'

export function Footer() {

  return (

    <View>

      <Text style={styles.fernando}>2024 Fernando de Noronha Turismo</Text>

    </View>
    
  )
}

const styles = StyleSheet.create({
  
  fernando: {

    marginTop: 25,

     marginLeft: 55,
  }
})