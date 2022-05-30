import * as React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, Text, View } from "react-native";
import AnimatedLottieView from 'lottie-react-native';

interface RankLoadingProps { }

const RankLoading: React.FC<RankLoadingProps> = () => {

  let animation: AnimatedLottieView | null = null;

  React.useEffect(() => {
    animation?.play(60);
  }, [])

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../assets/lf30_editor_3lwkzmqs.json")}
        style={[styles.animation]}
        ref={(animationLottie) => animation = animationLottie}
        autoPlay
        loop
        colorFilters={[
          {
            keypath: 'Avatar Placeholder',
            color: '#222431',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  animation: {
    width: '100%',
    height: 'auto',
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
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: '100%'
  }
});

export default RankLoading;