import * as React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, Text, View } from "react-native";

interface LottieProps {
  height?: number | string
  width?: number | string
}

const Lottie: React.FC<LottieProps> = ({ height, width }) => {

  return (
    <View>
      <LottieView
        source={require("../../../assets/67834-ssssttt-shut-up-the-cat-is-sleeping.json")}
        style={[styles.animation, { height, width }]}
        autoPlay
      />
      <Text style={styles.text}>Carregando ...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  animation: {
    // width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    color: '#FFFFFF',
    fontFamily: 'Nunito_400Regular',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 50,
  }
});

export default Lottie;