import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

import Albedo from '../../assets/imgs/albedo.png'
import Gelo from '../../assets/imgs/gelo.png'

export interface CardProps {
  onPress?: () => void;
}

export default function Card({ onPress }: CardProps) {
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
      <View style={styles.circle} >
        <Image source={Gelo} style={{ marginRight: 5, flex: 1 }} />
      </View>
      {/* <Icon
        name={'favorite-border'}
        type="material"
        color="#ed4956"
        size={23}
        containerStyle={[styles.element]}
        tvParallaxProperties={undefined}
        onPress={() => console.log('teste')}
      /> */}
      <Image source={Albedo} style={styles.image} />
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
    // width: 70,
    // height: 70
  },
  icon: {
    position: 'absolute',
    left: -10,
    top: 53,
    zIndex: 1,
  },
  element: {},
  circle: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    backgroundColor: '#36384a',
    position: 'absolute',
    left: 56,
    top: -10
  }
})
