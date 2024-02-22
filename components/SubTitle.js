import { View, Text, StyleSheet } from 'react-native'

export function SubTitle() {
  return (

    <View>

      <Text style={styles.noronha}>Explore as Maravilhosas Praias</Text>

      <Text style={styles.fernando}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turquesa.</Text>
      
    </View>
    
  )
}

const styles = StyleSheet.create({

  noronha: {
    fontSize: 20,

    paddingBottom: 15,

    paddingTop: 15,

    marginTop: 30,

    color: '#ffffff',

    textAlign: 'center',
    
    fontWeight: 'bold',

    backgroundColor: '#f18210',

  },
  fernando: {

    marginLeft: 10,
  }
})