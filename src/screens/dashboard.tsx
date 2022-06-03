import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import Card from '../components/Card';

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
  upgrades: Array<object>;
}

import { useAuth } from '../contexts/AuthContext';
import { getCharacters } from '../services/character';
import RankLoading from '../components/Loading/RankLoading';
import Filter from '../components/Filter';


export default function Dashboard(props: DashboardProps) {

  const nav = useNavigation<any>()

  const [characters, setCharacters] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  const URL = 'https://rerollcdn.com'

  React.useEffect(() => {
    loadCharacters()
  }, [search])


  const loadCharacters = async () => {
    try {
      setLoading(true)
      const response = await getCharacters(search)
      setCharacters(response.data.characters)
    } catch (e) {
      console.log("dashboard error", e)
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error loading characters',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>CHARACTERS LIST</Text>
          {/* <TextInput style={styles.input} onChangeText={setSearch} placeholder='Busque por um personagem' placeholderTextColor={'#53566e'} /> */}
        </View>

        <Filter setSearch={setSearch} />

        <View style={styles.cards}>
          {loading ? <RankLoading /> :
            characters?.map((character: ICharacter) => {
              const url = `${URL}${character.icon}`
              const obj = {
                name: character.name,
                stars: character.rarity,
                element: character.vision,
                weapon: character.weapon,
                imageUrl: url,
                character
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
    elevation: 3,
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
    width: '100%'
  }
})
