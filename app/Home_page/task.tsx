import React from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";

import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import HomeManagementImg from '../../assets/svg_transformer/erranSvg'
import Card from "../../components/card";
import ErranImg from '../../assets/svg_transformer/erranSvg'
import HomeManagement from '../../assets/svg_transformer/home_managementSvg'
import HomeServiceImg from '../../assets/svg_transformer/homServicesSvg'
import  MovingPropertyImg from '../../assets/svg_transformer/property_Svg'
import { router, useRouter } from 'expo-router';





export default function TaskCards() {
    const router = useRouter()

    return (
        <ScrollView>
        <View style={styles.container}>
            
            <View style={[styles.cards]}>


                <View style={[styles.innerCard]}>
                    <Card>
                        <HomeManagement height={110} width={190} />
                        <Text style={styles.innerCardText}>Home Management</Text>
                    </Card>
                </View>
                <View style={[styles.innerCard]}>
                    <Card>
                        <HomeServiceImg height={110} width={190} />
                        <Text style={styles.innerCardText}>Home Service</Text>
                    </Card>
                </View>
                <View style={[styles.innerCard]}>
                    <Card>
                        <MovingPropertyImg height={110} width={190} />
                        <Text style={styles.innerCardText}>Moving Properties</Text>
                    </Card>
                </View>
                <View style={[styles.innerCard]}>
                    <Card>
                        <ErranImg height={110} width={190} />
                        <Text style={styles.innerCardText}>Errand/Delivery</Text>
                    </Card>
                </View>
                <View style={[styles.innerCard]}>
                    <Card>
                        <ErranImg height={110} width={190} />
                        <Text style={styles.innerCardText}>Errand/Delivery</Text>
                    </Card>
                </View>
                <View style={[styles.innerCard]}>
                    <Card>
                        <ErranImg height={110} width={190} />
                        <Text style={styles.innerCardText}>Errand/Delivery</Text>
                    </Card>
                </View>
                <View style={[styles.innerCard]}>
                    <Card>
                        <ErranImg height={110} width={190} />
                        <Text style={styles.innerCardText}>Errand/Delivery</Text>
                    </Card>
                </View>
                <View style={[styles.innerCard]}>
                    <Card>
                        <ErranImg height={110} width={190} />
                        <Text style={styles.innerCardText}>Errand/Delivery</Text>
                    </Card>
                </View>
                
            </View>
            {/* this component/circletask was the file i use but i have deleted it  */}
            <Pressable onPress={() => router.push('/Home_page/component/circleTask')}>
          <Text style={{textAlign: 'center', textDecorationLine: 'underline', fontSize: 20, color: COLORS.MAIN_GREEN, marginVertical:30}}>See More</Text>
            </Pressable>
            
            
            
      
        </View>
        </ScrollView>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        marginTop:90,
        width: '100%',
        // marginVertical: 60,
    },

    cards: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
        marginLeft: 40,
        // marginVertical: 20,
        width: '100%',
        height: 'auto',




    },
    innerCard: {
        width: 175,
        height: 180,
        marginBottom: 20,
        // marginVertical:

    },

    innerCardText: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 20,
        fontWeight: '600',
        color: COLORS.MAIN_GREEN

    }

})