import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';

interface PasswordProps {
  top: number
  onChangeText?: (text: string) => void
  onBlur?: () => void

}

const Password: React.FC<PasswordProps> = ({ top, onBlur, onChangeText }) => {
  const [seePassword, setSeePassword] = React.useState(true)

  return (
    <View>
      <TextInput onBlur={onBlur} onChangeText={onChangeText} style={styles.input} placeholder="Password" secureTextEntry={seePassword} />
      <Icon
        name={seePassword ? 'eye-off' : 'eye'}
        type="material-community"
        color="#000"
        size={30}
        containerStyle={[styles.icon, { top }]}
        tvParallaxProperties={undefined}
        onPress={() => setSeePassword(!seePassword)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 49,
    borderRadius: 6,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    color: '#8E8DA5',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 20
  },
  icon: {
    position: 'absolute',
    right: 18,
    // top: 40,
  },
})

export default Password;