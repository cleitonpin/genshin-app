import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, ScrollViewBase, ActivityIndicator } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import Card from '../components/Card';
import api from '../services/api';

export interface DashboardProps {
}

interface ICharacter {
  id: string;
  name: string;
  description: string;
  vision: string;
  weapon: string;
  rarity: number;
  icon: string;
  skillTalents: Array<object>;
  passiveTalents: Array<object>;
  constellations: Array<object>;
}

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


export default function Dashboard(props: DashboardProps) {

  const nav = useNavigation<any>()

  const [characters, setCharacters] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  const URL = 'https://rerollcdn.com'

  React.useEffect(() => {
    try {

      async function loadCharacters() {
        const response = await api.get(`/en/characters`, {
          params: {
            vision: search
          }
        })

        setCharacters(response.data.characters)
      }

      setLoading(true)
      loadCharacters()
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [search])

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>LISTA DE PERSONAGENS</Text>

          {/* <Icon
            name={'search'}
            type="material"
            color="#85889F"
            size={30}
            containerStyle={[styles.icon]}
            tvParallaxProperties={undefined}
            onPress={() => console.log('teste')}
          /> */}
          <TextInput style={styles.input} onChangeText={setSearch} placeholder='Busque por um personagem' placeholderTextColor={'#53566e'} />
        </View>

        <View style={styles.options}>
          <View style={styles.group}>
            <Image onPress={() => setSearch('Anemo')} style={{ width: 35, height: 35 }} source={Vento} />
            <Image onPress={() => setSearch('Cryo')} style={{ width: 35, height: 35 }} source={Gelo} />
            <Image onPress={() => setSearch('Electro')} style={{ width: 35, height: 35 }} source={Raio} />
            <Image onPress={() => setSearch('Geo')} style={{ width: 35, height: 35 }} source={Terra} />
            <Image onPress={() => setSearch('Pyro')} style={{ width: 35, height: 35 }} source={Fogo} />
            <Icon
              name={'file-download'}
              type="material"
              color="white"
              size={30}
              // containerStyle={[styles.icon, { top }]}
              tvParallaxProperties={undefined}
              onPress={() => setSearch('')}
            />

          </View>
          {/* <View style={styles.group}>
            <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Arco} />
            <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Livro} />
            <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Espadao} />
            <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Lanca} />
            <Image onPress={() => setSearch(prevState )} style={{ width: 35, height: 35 }} source={Espada} />
          </View> */}
        </View>

        <View style={styles.cards}>
          {loading ? <ActivityIndicator size={50} color="white" style={styles.loading} /> :
            characters?.map((character: ICharacter) => {
              const url = `${URL}${character.icon}`
              const obj = {
                name: character.name,
                stars: character.rarity,
                element: character.vision,
                weapon: character.weapon,
                imageUrl: url,
              }

              return (
                <Card
                  key={character.id}
                  onPress={() => nav.navigate('character', obj)}
                  imageUrl={url}
                  vision={character.vision}
                />
              )
            })}
          {/* <Card onPress={() => nav.navigate('character', { name: 'Kazuha', stars: 5 })} /> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222431',
    padding: 35,
    alignContent: 'flex-start'
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginTop: 18,
    // elevation: 3,
    width: '100%',
    backgroundColor: '#222431',
    borderWidth: 0

  },
  scrollView: {
    flex: 1,
    backgroundColor: '#222431',
  },
  title: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
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
    justifyContent: 'center',

    height: '100%',
    alignItems: 'center',
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
