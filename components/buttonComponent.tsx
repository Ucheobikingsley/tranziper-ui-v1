import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
const { width } = Dimensions.get('screen');
const ButtonComponent = ({
  name,
  defaultWidth,
  marginTop,
  marginLeft,
  onClick = () => {},
}: {
  name: string;
  defaultWidth?: number;
  marginTop?: number;
  marginLeft?: number;
  onClick?: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.create,
          { width: defaultWidth || width / 2 },
          { marginTop: marginTop || 10 },
          marginLeft ? { marginLeft } : {},
        ]}
        onPress={() => {
          onClick();
        }}>
        <Text style={styles.textColor}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  create: {
    paddingTop: SPACING.space_16,
    paddingBottom: SPACING.space_16,

    backgroundColor: COLORS.MAIN_GREEN,
    borderRadius: BORDERRADIUS.radius_4,

    display: 'flex',
    alignItems: 'center',
  },

  textColor: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_16,
  },
});

export default ButtonComponent;
