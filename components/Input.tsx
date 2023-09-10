import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { BORDERRADIUS, COLORS, FONTSIZE } from '../theme/theme';

interface PropsIcon {}
type iconPropsProperty = PropsIcon & IconProps<any>;

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},

  ...props
}: {
  label?: string;
  iconName?: iconPropsProperty['name']; //for material icons only.
  error?: string;
  password?: string;
  placeholder?: string;
  onFocus?: () => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState();

  return (
    <View style={{ marginBottom: 20, marginHorizontal: 10 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.Orange
              : isFocused
              ? COLORS.DarkGrey
              : COLORS.WhiteRGBA32,
          },
        ]}>
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{ color: COLORS.DarkGrey, flex: 1 }}
          {...props}
        />
        <Icon
          style={{ fontSize: 22, color: COLORS.DarkGrey, marginRight: 10 }}
          name={iconName}
        />
      </View>

      {error && (
        <Text
          style={{
            color: COLORS.Orange,
            fontSize: FONTSIZE.size_12,
            marginTop: 7,
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: FONTSIZE.size_16,
    color: COLORS.Grey,
  },

  logoWrapper: {
    marginBottom: 20,
  },
  logoImage: {
    borderRadius: 50,
    width: 80,
    height: 80,
  },

  inputContainer: {
    height: 55,
    backgroundColor: COLORS.BlackRGB10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    // backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderRadius: BORDERRADIUS.radius_4,
    alignItems: 'center',
  },
});

export default Input;
