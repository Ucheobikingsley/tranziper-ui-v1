import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import Input from '../Input';

const RegistrationScreen = ({ navigator }) => {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.White, flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
           
                <Text style={{ color: COLORS.Black, fontSize: 40, fontWeight: 'bold' }}> Sign Up</Text>

                <View style={{ marginVertical: 20 }}>
                    <Input placeholder='Enter Your email address' iconName='email-outline' label='Email' />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default RegistrationScreen