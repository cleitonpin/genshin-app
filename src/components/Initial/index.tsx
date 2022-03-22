import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/imgs/logo.png';

interface InitialProps {
  title: string;
}

const Initial: React.FC<InitialProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.login}>
        {children}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222431',
  },
  login: {
    flex: 1,
    width: '100%',
    height: 456,
    backgroundColor: '#363742',
    borderRadius: 6,
    shadowColor: '#fff',
    padding: 33
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  header: {
    flex: 0.5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%'
  },
  logo: {
    height: 175,
    width: 175,
  },
  title: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 45,
    lineHeight: 61,
    fontWeight: 'normal',
    color: '#fff',
  },
});

export default Initial;
