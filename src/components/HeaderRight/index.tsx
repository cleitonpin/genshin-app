import React from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"

interface HeaderRightProps {
  navigation: any
}

const HeaderRight: React.FC<HeaderRightProps> = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}

      style={{
        right: 40,
      }}
      accessibilityLabel="Learn more about this purple button"
    >
      <Icon
        name={'list'}
        type="material"
        color="white"
        size={35}
        // containerStyle={[styles.icon, { top }]}
        tvParallaxProperties={undefined}
        onPress={() => { }}
      />

    </TouchableOpacity>
  )

}

export default HeaderRight