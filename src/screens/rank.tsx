import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

import Card from '../components/Card';
import { tierList } from '../services/character';
import RankLoading from '../components/Loading/RankLoading';
import Filter from '../components/Filter';

interface RankProps { }

interface Tier {
  [key: string]: Array<{
    name: string;
    icon: string;
    designation: string;
    constellation: string;
    vision: string;
  }>;
}

const colorRank: { [key: string]: string } = {
  "SS+": "#EF5350",
  "S+": "#ff7f7f",
  "S": "#ffbf7f",
  "A": "#ffff7f",
  "B": "#bfff7f",
  "C": "#7fff7f",
}

const Rank: React.FC<RankProps> = () => {

  const [tiers, setTiers] = React.useState<Tier>({})
  const [search, setSearch] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const keys = Object.keys(tiers)

  React.useEffect(() => {
    getTierList();
  }, [search])

  const getTierList = async () => {
    try {
      setLoading(true)
      const ranks = await tierList(search);
      setTiers(ranks.data)
    } catch {
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
          <Text style={styles.title}>BEST CHARACTERS TIER LIST</Text>

          {/* <TextInput style={styles.input} placeholder='Busque por um personagem' placeholderTextColor={'#53566e'} /> */}
        </View>
        <Filter setSearch={setSearch} />

        {loading ? <RankLoading /> :

          <View style={styles.rank}>
            <View style={styles.characters}>
              {keys.map((key, index) => {

                return (
                  <View style={styles.personajes} key={index}>
                    <View style={[styles.retangle, { backgroundColor: colorRank[key] }]}>
                      <Text style={styles.tier_rank}>{key}</Text>
                    </View>

                    {tiers[key].map((character, index) => {
                      const { name, designation, constellation, vision, icon } = character

                      return (
                        <View style={styles.tier} key={index}>
                          <Card
                            // onPress={() => nav.navigate('character', obj)}
                            imageUrl={icon}
                            vision={vision}
                            constellation={constellation}
                          />

                          <View style={styles.info}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.designation}>{designation}</Text>
                          </View>
                        </View>
                      )
                    })}
                  </View>
                )
              })}
            </View>
          </View>}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222431',
    padding: 35,
    alignContent: 'flex-start'
  },
  personajes: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#272937',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 0.5,
    backgroundColor: '#222431',
  },
  tier: {
    padding: 5,
    height: 'auto',
    // width: '50%',
    // flex: 1,
    // backgroundColor: '#000',
  },
  element: {
    width: 35,
    height: 35,
    margin: 8
  },
  tier_rank: {
    color: '#1d1f29',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Nunito_400Regular',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 22,
    color: '#FFFFFF',
    marginTop: 5
  },
  designation: {
    fontFamily: 'Nunito_400Regular',
    color: '#a7b1c1',
    fontSize: 14,
    margin: 2,
    overflow: 'hidden',
    // transition: color .3s,
  },
  rank: {
    width: '100%',
    height: 'auto',
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
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    // top: -23,
    // borderBottomLeftRadius: 6,

  },
  characters: {
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'black',
    alignItems: 'center',
    // position: 'absolute',
    // right: 43,
    // top: -25,
    // width: '70%',
    flexWrap: 'wrap',
    height: 'auto'
    // padding: 35,
  }
});

export default Rank;
