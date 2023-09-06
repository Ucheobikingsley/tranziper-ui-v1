import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import Input from '../Input';

const RegistrationScreen = ({ navigator }) => {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.White, flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
           
                <Text style={{ color: COLORS.Black, fontSize: 40, fontWeight: 'bold' }}> Sign Up</Text>

                <View style={{ marginVertical: 20, }}>
                    
                    <Input placeholder='FirstName' label='First Name' />
                    <Input placeholder='LastName'  label='Last Name' />
                    <Input placeholder='Email address' label='Email' />
                    <Input placeholder='Phone Number'    label='Phone Number' />
                    <Input placeholder='Password' iconName='eye-off-outline'  label='Password' password />
                    <Input placeholder='Confirm Password' iconName='eye-off-outline' label='Confirm Password' password />
                    

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default RegistrationScreen