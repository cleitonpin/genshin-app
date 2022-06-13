import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import Toast from 'react-native-toast-message';

import { getWeapons } from '../services/weapons';

import Filter from '../components/Filter';
import Table from '../components/Table';
import AdMob from '../components/AdMob';

interface WeaponsProps { }

const tableHead = ['Weapon', 'Type', 'Rarity', 'ATK', 'Secondary', 'Passive', 'Bonus', 'Location'];
const widthArr = [200, 80, 100, 80, 80, 170, 900, 70]
interface IWeapon {
  name: string;
  type: string;
  rarity: number;
  atk: string;
  secondary: string;
  passive: string;
  bonus: string;
  location: string;
  icon: string;
}

const Weapons: React.FC<WeaponsProps> = (props) => {

  const [weapons, setWeapons] = React.useState<Array<Array<{}>>>([]);
  const [search, setSearch] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    loadWeapons();
  }, [search])

  const loadWeapons = async () => {
    try {
      setLoading(true)
      const { data } = await getWeapons(search);

      const weapons = data.map((item: IWeapon) => {
        const weaponData: any[] = [];
        weaponData.push(
          <View style={styles.boxWeapon}>
            <View style={styles.boxImage}>
              <Image source={{ uri: item.icon }} style={{ width: 50, height: 50 }} />
            </View>
            <Text style={{ width: 100, fontSize: 13, color: '#fff', flexWrap: 'wrap', }}>{item.name}</Text>
          </View >
        );
        weaponData.push(item.type);
        weaponData.push(item.rarity);
        weaponData.push(item.atk);
        weaponData.push(item.secondary);
        weaponData.push(item.passive);
        weaponData.push(item.bonus);
        weaponData.push(item.location);
        return weaponData;
      });

      setWeapons(weapons)
    } catch (e: any) {
      console.log("  error", e)
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
          <Text style={styles.title}>WEAPONS LIST</Text>

          {/* <TextInput style={styles.input} placeholder='Busque por um personagem' placeholderTextColor={'#53566e'} /> */}
        </View>

        <Filter setSearch={setSearch} weapon={!!weapons} />
        <AdMob />
        <Table data={weapons} loading={loading} tableHead={tableHead} widthArr={widthArr} />
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
  header: {
    height: 50,
    backgroundColor: '#1d1f29'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Nunito_400Regular',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    /* identical to box height */
    color: '#FFFFFF',
  },
  dataWrapper: {
    marginTop: 15,
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
  row: {
    height: 140,
    backgroundColor: '#272937',
    borderColor: '#1d1f29',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    elevation: 6,
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
});

export default Weapons;


