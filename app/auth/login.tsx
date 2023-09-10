import { router } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Input from '../../components/Input';
import ButtonComponent from '../../components/buttonComponent';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/theme';
const { width, height } = Dimensions.get('screen');
const Login = ({ navigator }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/pngs/tranzipper_main.png')}></Image>
        </View>
        <Text style={{ color: COLORS.Black, fontSize: 40, fontWeight: 'bold' }}>
          {' '}
          Login
        </Text>

        <Text style={styles.emailInfo}>Welcome back!</Text>

        <View style={{ marginVertical: 20 }}>
          <Input placeholder="Email" label="Email" />
          <Input placeholder="Password" label="Password" />
        </View>

        <ButtonComponent
          name="Login"
          marginLeft={-30}
          defaultWidth={width / 1.3}
        />
        <View style={styles.info}>
          <View style={[styles.wrapper, { marginTop: 40 }]}>
            <Text style={{ fontSize: FONTSIZE.size_14 }}>
              Forgot your password?
            </Text>
            <Text
              style={{ fontSize: FONTSIZE.size_14, color: COLORS.MAIN_GREEN }}>
              Reset password
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    flex: 1,
  },

  logoWrapper: {
    marginBottom: 40,
    display: 'flex',
    alignItems: 'center',
  },

  emailInfo: {
    width: '80%',
    fontSize: FONTSIZE.size_16,
    marginTop: 41,
    textAlign: 'left',
    lineHeight: 26,
    marginLeft: SPACING.space_6,
  },
  logoImage: {
    borderRadius: 50,
    width: 80,
    height: 80,
  },

  info: {
    marginTop: 20,
    width,
    display: 'flex',
    alignItems: 'center',
    marginLeft: -30,
  },

  wrapper: {
    width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    flexDirection: 'row',
  },
});

export default Login;
