import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

import Card from '../components/Card';

export interface DashboardProps {
}

export default function Dashboard(props: DashboardProps) {
  const nav = useNavigation<any>()

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.title}>LISTA DE PERSONAGENS</Text>

        <Icon
          name={'search'}
          type="material"
          color="#85889F"
          size={30}
          containerStyle={[styles.icon]}
          tvParallaxProperties={undefined}
          onPress={() => console.log('teste')}
        />
        <TextInput style={styles.input} placeholder='Busque por um personagem' placeholderTextColor={'#53566e'} />
      </View>

      <View style={styles.cards}>
        <Card onPress={() => nav.navigate('character', { name: 'Kazuha', stars: 5 })} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222431',
    padding: 35,
    alignContent: 'flex-start'
  },
  topHeader: {

  },
  title: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  input: {
    marginTop: 25,
    backgroundColor: '#222431',
    borderRadius: 4,
    height: 40,
    // backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 1.4,
    borderBottomWidth: 1.4,
    borderColor: '#36384A',
    color: '#36384A',
    paddingStart: 56
  },
  icon: {
    position: 'absolute',
    left: 18,
    top: 52,
    zIndex: 1,
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
})
