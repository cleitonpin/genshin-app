import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

import Toast from 'react-native-toast-message';

import { getArtifacts } from '../services/artifacts';

import star from '../assets/imgs/star.png'
import Table from '../components/Table';
import AdMob from '../components/AdMob';

interface ArtifactsProps { }

const tableHead = ['Set', 'Max Rarity', '2-Piece Bonus', '4-Piece Bonus'];
const widthArr = [180, 230, 150, 280]

interface IArtifact {
  name: string;
  id: string;
  max_rarity: number;
  two_piece_bonus: string;
  four_piece_bonus: string;
  icon: string;
}

const Artifacts: React.FC<ArtifactsProps> = (props) => {

  const [artifacts, setArtifacts] = React.useState<Array<Array<{}>>>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    loadArtifacts();
  }, [])

  const loadArtifacts = async () => {
    try {
      setLoading(true)
      const { data } = await getArtifacts();

      const artifacts = data.map((item: IArtifact) => {
        const artifactData: any[] = [];
        artifactData.push(
          <View style={styles.boxWeapon}>
            <View style={styles.boxImage}>
              <Image source={{ uri: item.icon }} style={{ width: 50, height: 50 }} />
            </View>
            <Text style={{ width: 100, fontSize: 13, color: '#fff', flexWrap: 'wrap', }}>{item.name}</Text>
          </View >
        );
        artifactData.push(
          <View>
            {item.max_rarity && item.max_rarity > 0 && item.max_rarity <= 5 &&
              <View style={styles.stars}>
                {[...Array(item.max_rarity)].map((_, i) => (
                  <Image source={star} style={styles.star} key={i} />
                ))}
              </View>
            }
          </View>);
        artifactData.push(item.two_piece_bonus);
        artifactData.push(item.four_piece_bonus);

        return artifactData;
      });

      setArtifacts(artifacts)
    } catch (e: any) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: e.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>ARTIFACTS SET LIST</Text>

          <Text style={styles.description}>
            There are 5 slots of gear in Genshin Impact: Flower, Plume, Sands, Goblet, and Circlet.
            While Flowers will also have flat HP as their main stat, and Plumes will always have flat
            ATK as their main stat, the other pieces have different options. Keep in mind that a piece
            of gear can never have the same main and secondary stat.
          </Text>
          {/* AD MOB */}
          <Text style={styles.description}>
            - Flower: HP {'\n'}
            - Plume: ATK {'\n'}
            - Sands: ATK / ATK% / DEF / DEF% / HP / HP% / Energy Recharge / Elemental Mastery {'\n'}
            - Goblet: ATK% / DEF% / HP% / Elemental Mastery, Elemental DMG% (Electro, Hydro, etc) {'\n'}
            - Circlet: ATK% / DEF% / HP% / CRIT Chance / CRIT DMG / Elemental Mastery / Healing Bonus {'\n'}
          </Text>
        </View>

        <AdMob />
        <Table data={artifacts} loading={loading} tableHead={tableHead} widthArr={widthArr} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222431',
    padding: 35,
    alignContent: 'flex-start',
  },
  scrollView: {
    flex: 0.5,
    backgroundColor: '#222431',
  },

  description: {
    color: '#a7b1c1',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'justify',
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
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    // margin: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  element: {
    width: 35,
    height: 35,
    margin: 8
  },

  boxImage: {
    width: 50,
    height: 'auto',
    marginRight: 10,
    backgroundColor: '#36384a',
    padding: 0,
    borderRadius: 4,
    elevation: 2,
  },
  boxWeapon: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
  },
  title: {
    fontFamily: 'Nunito_400Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  stars: {
    flexDirection: 'row',
    width: '100%',
    height: 20,
    // position: 'absolute',
    // bottom: -7,
    // left: 4,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    width: 16,
    height: 16,
    // marginLeft: -2,
    zIndex: 1,
  }
});

export default Artifacts;