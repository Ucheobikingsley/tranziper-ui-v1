import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { BORDERRADIUS, COLORS, FONTSIZE } from '../theme/theme';


const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => { },
  ...props }) => {

  return (
    
    <View style={{ marginBottom: 20, marginHorizontal: 10 }}>
     
    <Text style={styles.label}>{label}</Text>
    <View style={[styles.inputContainer]}>
      <TextInput {...props} />
    </View>
  </View>
  )



}

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize:FONTSIZE.size_16,
    color: COLORS.Grey
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
    // backgroundColor: COLORS.Grey,
    flexDirection: 'row',
    paddingHorizontal: 15,
    // backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderRadius: BORDERRADIUS.radius_4,
    alignItems: 'center'

  }
})

export default Input
