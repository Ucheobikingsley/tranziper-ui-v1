import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import DotSvg from '../../assets/svg_transformer/dotSvg';
import IllustrationTwo from '../../assets/svg_transformer/IllustrationTwo';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/theme';
const { width, height } = Dimensions.get('window');

export default function Intro_2() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/pngs/tranzipper_main.png')}></Image>
      </View>
      <View style={styles.imageContainer}>
        <IllustrationTwo width={301} />
      </View>
      <Text style={styles.info}>
      Find trusted help for everything through our background-checked taskers near you
      </Text>
      <View style={styles.dot}>
        <DotSvg width={24} height={8} color="#1B5E20" />
      </View>
      <TouchableOpacity style={styles.create}>
        <Text style={styles.textColor}>Continue</Text>
      </TouchableOpacity>
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
  logoWrapper: {
    marginBottom: 20,
  },
  logoImage: {
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  imageContainer: {
    marginTop: 20,
  },

  hero: {
    objectFit: 'cover',
  },

  info: {
    color: COLORS.MAIN_GREEN,
    fontSize: FONTSIZE.size_18,
    textAlign: 'center',
    marginTop: 40,
  },
  create: {
    paddingTop: SPACING.space_16,
    paddingBottom: SPACING.space_16,
    paddingLeft: SPACING.space_96,
    paddingRight: SPACING.space_96,
    backgroundColor: COLORS.MAIN_GREEN,
    borderRadius: BORDERRADIUS.radius_4,
    marginTop: 40,
  },

  textColor: {
    color: COLORS.White,
  },

  dot: {
    marginTop: 40,
  },
  skipButton: {
    fontSize: FONTSIZE.size_14,
    marginTop: 40,
    letterSpacing: 0.17,
    color: COLORS.MAIN_GREEN,
  },
});
