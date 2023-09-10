import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Registration from '../app/auth/registration';
import Intro_1 from '../app/first_time_login/introduction';
import Intro_2 from '../app/first_time_login/introduction_2';

export default function FirstTimeLoginIn() {
  return (
    <View style={styles.container}>
      {/* <Intro_1 /> */}
      <Intro_2 />
      {/* <Registration /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});
