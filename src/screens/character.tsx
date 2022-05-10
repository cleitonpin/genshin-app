import { RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackParams } from '../navigations';

import Albedo from '../assets/imgs/albedo.png'
import skill1 from '../assets/imgs/skill1.png'

interface CharacterProps {
  route: RouteProp<StackParams, 'character'>
}

export default function Character({ route }: CharacterProps) {

  const scrollViewReder = React.useRef<ScrollView>(null);

  return (
    <ScrollView style={styles.scrollView} ref={scrollViewReder}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Albedo} style={{ width: 70, height: 70 }} />

          <View>
            <Text style={styles.title}>{route.params.name}</Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.subtitle, { color: '#49B9BE' }]}>Anemo</Text>
              <Text style={[styles.subtitle, { color: '#ffffff' }]}>Espada</Text>

            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => console.log('teste')}>
            <Text style={styles.buttonText}>Visão geral</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => console.log('teste')}>
            <Text style={styles.buttonText}>Habilidades</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => console.log('teste')}>
            <Text style={styles.buttonText}>Constelações</Text>
          </Pressable>
          {/* <Pressable style={styles.button} onPress={() => console.log('teste')}>
            <Text style={styles.buttonText}>Equipamentos</Text>
          </Pressable> */}
          {/* <Pressable style={styles.button} onPress={() => console.log('teste')}>
            <Text style={styles.buttonText}>Ascensão</Text>
          </Pressable> */}
        </View>

        <View style={styles.geral}>
          <Text style={styles.buttonText}>{route.params.name}</Text>
          <Text style={[styles.buttonText, { fontSize: 12, color: '#A7B1C1' }]}>
            Lorem ipsum dolor sit amet, consectetur elit.
            Pellentesque maximus laoreet quam a ultricies.
          </Text>
        </View>

        <View style={{ marginTop: 30, justifyContent: 'flex-start', width: '100%', padding: 25 }}>
          <Text style={styles.buttonText}>{route.params.name} Habilidades</Text>

          <View style={styles.skill}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={skill1} />
              <Text style={[styles.buttonText, { margin: 10 }]}>Garyuu Bladework</Text>
            </View>

            <View style={{ justifyContent: 'flex-start', }}>
              <Text style={styles.textSkill}>Ataque normal</Text>
              <Text style={[styles.textSkill, { color: '#A7B1C1', fontSize: 13 }]}>
                Lorem ipsum dolor sit amet, consectetur elit.
                Pellentesque maximus laoreet quam a ultricies.
              </Text>
              <Text style={styles.textSkill}>Ataque carregado</Text>
              <Text style={[styles.textSkill, , { color: '#A7B1C1', fontSize: 13 }]}>
                Pellentesque sit amet dolor non tincidunt
                placerat sed sit amet metus. Aliquam euismod
                fringilla nunc at placerat.
              </Text>
              <Text style={styles.textSkill}>Ataque imersivo</Text>
              <Text style={[styles.textSkill, , { color: '#A7B1C1', fontSize: 13 }]}>
                Pellentesque sit amet dolor non tincidunt
                placerat sed sit amet metus. Aliquam euismod
                fringilla nunc at placerat.
              </Text>
            </View>
          </View>

        </View>

        <View style={{ justifyContent: 'flex-start', width: '100%', padding: 25 }}>
          <Text style={styles.buttonText}>{route.params.name} constelações</Text>

          <View style={[styles.skill, { height: 231 }]}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={skill1} />
              <Text style={[styles.buttonText, { margin: 10, textAlign: 'center' }]}>
                Scarlet Hills{'\n'}
                <Text style={[styles.buttonText, { color: '#A7B1C1', fontSize: 13 }]}> Constelação Nv. 1 </Text>
              </Text>

            </View>

            <View style={{ justifyContent: 'flex-start', }}>
              <Text style={[styles.textSkill, { color: '#A7B1C1', fontSize: 13 }]}>
                Lorem ipsum dolor sit amet, consectetur elit.
                Pellentesque maximus laoreet quam a ultricies.
              </Text>
            </View>
          </View>

        </View>

      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222431',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 0.5,
    backgroundColor: '#222431',
  },
  header: {
    width: '100%',
    backgroundColor: '#636963',
    height: 106,
    alignItems: 'center',
    padding: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Nunito_400Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 21,
    lineHeight: 29,
    marginLeft: 10,
    /* identical to box height */
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginLeft: 10,
  },
  buttons: {
    width: '100%',

  },
  button: {
    padding: 20,
    backgroundColor: '#36384A',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3
  },
  buttonText: {
    fontFamily: 'Nunito_400Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
    marginLeft: 10,
    /* identical to box height */
    color: '#FFFFFF',
  },
  geral: {
    width: '100%',
    padding: 25,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#2D3040'
  },
  skill: {
    width: '100%',
    height: 460,
    backgroundColor: '#2D3040',
    marginTop: 10,
    padding: 25,
  },
  textSkill: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 6,
    color: '#FFD579',
  }
})