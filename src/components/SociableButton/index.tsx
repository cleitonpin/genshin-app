import * as React from 'react'
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements'
import { normalize } from '../../utils/responsive';

interface SociableButtonProps {
  source: ImageSourcePropType
  title: string
}

const SociableButton: React.FC<SociableButtonProps> = ({ title, source }) => {
  return (
    <View style={{ position: 'relative' }}>
      <Image source={source} style={styles.iconSociable} />
      <Button
        title={title}
        type="outline"
        titleStyle={styles.titleStyle}
        buttonStyle={styles.buttonElements}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonElements: {
    backgroundColor: '#E5F8F2',
    borderRadius: 6,
    height: 50,
    color: '#010204'
  },
  titleStyle: {
    fontSize: normalize(11),
    lineHeight: 25,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#010204',
    marginLeft: 16,
    fontFamily: 'Nunito_400Regular',
  },
  iconSociable: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 43,
    top: 10,
    zIndex: 1,
  },
})

export default React.memo(SociableButton);