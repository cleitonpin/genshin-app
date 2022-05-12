import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

import Albedo from '../../assets/imgs/albedo.png'
import Gelo from '../../assets/imgs/gelo.png'

export interface CardProps {
  onPress?: () => void;
  imageUrl?: string;
  vision?: string;
}

export default function Card({ onPress, imageUrl, vision }: CardProps) {

  const elementIcon = {
    Geo: "https://rerollcdn.com/GENSHIN/Elements/Element_Geo.png",
    Pyro: "https://rerollcdn.com/GENSHIN/Elements/Element_Pyro.png",
    Hydro: "https://rerollcdn.com/GENSHIN/Elements/Element_Hydro.png",
    Cryo: "https://rerollcdn.com/GENSHIN/Elements/Element_Cryo.png",
    Anemo: "https://rerollcdn.com/GENSHIN/Elements/Element_Anemo.png",
    Electro: "https://rerollcdn.com/GENSHIN/Elements/Element_Electro.png",
  }

  // https://rerollcdn.com/GENSHIN/Characters/Qiqi.png
  // ayato
  // thoma
  // itto
  // sara
  // rosaria
  // yoimiya
  // aloy
  // ayaka
  // eula
  // gorou
  // kokomi
  // raiden
  // sayu
  // shenhe
  // yae miko
  // yanfei
  // yun jin

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.fixedRatio} />
      {/* <Icon
        name={'favorite-border'}
        type="material"
        color="#ed4956"
        size={23}
        containerStyle={[styles.icon]}
        tvParallaxProperties={undefined}
        onPress={() => console.log('teste')}
      /> */}

      <Image source={{ uri: elementIcon[vision] }} style={styles.circle} />

      {/* <Icon
        name={'favorite-border'}
        type="material"
        color="#ed4956"
        size={23}
        containerStyle={[styles.element]}
        tvParallaxProperties={undefined}
        onPress={() => console.log('teste')}
      /> */}
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#36384a',
    marginTop: 40,
  },
  fixedRatio: {
    backgroundColor: '#36384a',
    flex: 1,
    // aspectRatio: 1,
  },
  image: {
    width: 70,
    height: 70
  },
  icon: {
    position: 'absolute',
    left: -10,
    top: 53,
    zIndex: 1,
  },
  element: {},
  circle: {
    marginRight: 5,
    flex: 1,
    zIndex: 1,
    width: 22,
    height: 22,
    // borderRadius: 24 / 2,
    // backgroundColor: '#36384a',
    position: 'absolute',
    left: 56,
    top: -10,
    borderRadius: 100,
    padding: 3,
    // boxShadow:' 0 3px 6px rgb(0 0 0 / 23%), 0 3px 6px rgb(0 0 0 / 16%)'
  }
})
