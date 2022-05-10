import * as React from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

import Gelo from '../assets/imgs/gelo2.png';
import Terra from '../assets/imgs/terra.png';
import Raio from '../assets/imgs/raio.png';
import Vento from '../assets/imgs/vento.png';
import Fogo from '../assets/imgs/fogo.png';

import Arco from '../assets/imgs/bow.png';
import Espadao from '../assets/imgs/broadsword.png';
import Espada from '../assets/imgs/sword.png';
import Lanca from '../assets/imgs/spear.png';
import Livro from '../assets/imgs/book.png';
import Card from '../components/Card';

interface RankProps {

}

const Rank: React.FC<RankProps> = ({ }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.title}>MELHORES PERSONAGENS</Text>

        <TextInput style={styles.input} placeholder='Busque por um personagem' placeholderTextColor={'#53566e'} />
      </View>

      <View style={styles.options}>
        <View style={styles.group}>
          <Image source={Vento} />
          <Image source={Gelo} />
          <Image source={Raio} />
          <Image source={Terra} />
          <Image source={Fogo} />

        </View>
        <View style={styles.group}>
          <Image source={Arco} />
          <Image source={Livro} />
          <Image source={Espadao} />
          <Image source={Lanca} />
          <Image source={Espada} />
        </View>
      </View>

      <View style={styles.rank}>
        <Text style={styles.visionText}>Visão geral</Text>

        <View>

          <View style={styles.retangle}>
            <Text>SS+</Text>
          </View>

          <View style={styles.characters}>


            <View style={{ width: "30%", justifyContent: 'space-between' }}>
              <Card />
              <Text>Albedo</Text>
              <Text>Suporte</Text>
            </View>
            <View>
              <Card />
              <Text>Albedo</Text>
              <Text>Suporte</Text>
            </View>
            <View>
              <Card />
              <Text>Albedo</Text>
              <Text>Suporte</Text>
            </View>

          </View>

        </View>

      </View>
    </View>
  );
};


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
    paddingStart: 55
  },
  icon: {
    position: 'absolute',
    left: 18,
    top: 52,
    zIndex: 1,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#1D1F29',
    width: '100%',
    height: 123,
    marginTop: 20
  },
  group: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '75%',
    alignItems: 'center',
  },
  rank: {
    width: '100%',
    height: 246,
    backgroundColor: '#36384A',
    marginTop: 20,
    // padding: 25,
    borderRadius: 4,
  },
  visionText: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
    marginBottom: 20,
    padding: 25,
  },
  retangle: {
    width: 108,
    height: 177,
    backgroundColor: '#EF5350',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -23,
    borderBottomLeftRadius: 6,

  },
  characters: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    right: 43,
    top: -25,
    // width: 90,
    // padding: 35,
  }
});

export default Rank;
