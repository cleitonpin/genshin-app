import { StyleSheet, View } from "react-native"
import {
  AdMobBanner,
  AdMobRewarded,
  AdMobInterstitial
} from 'expo-ads-admob'
import React from "react"

const AdMob: React.FC<any> = (props) => {
  return (
    <View style={style.container}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
      // onAdFailedToLoad={(error: any) => console.log(error)}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222431',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    // position: 'absolute'
  }
})

export default AdMob