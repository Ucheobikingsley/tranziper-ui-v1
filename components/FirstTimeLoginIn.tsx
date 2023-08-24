import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Intro_1 from './Intro/Introduction';

export default function FirstTimeLoginIn() {
  return (
    <View style={styles.container}>
      <Intro_1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
