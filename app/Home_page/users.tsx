import { Link, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, Pressable } from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import UsersImage from '../../assets/svg_transformer/users_img1';
import ErranImg from '../../assets/svg_transformer/erranSvg'
import HomeManagement from '../../assets/svg_transformer/home_managementSvg'
import HomeServiceImg from '../../assets/svg_transformer/homServicesSvg'
import MovingPropertyImg from '../../assets/svg_transformer/property_Svg'
import Card from '../../components/card';

const { width, height } = Dimensions.get('screen');



export default function Home({navigation}) {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.firstText}>Hello, Unknown </Text>
            <Ionicons name="notifications" size={30} style={{ color: COLORS.MAIN_GREEN }} />
          </View>
          <View style={styles.imageContainer}>
            <Pressable onPress={() => alert('hello')}>
              <UsersImage width={380} />
            </Pressable>

          </View>
          <Text style={[styles.firstText]}>Choose tasks to set up</Text>
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

            </View>

          </View>
          <Pressable onPress={() => router.push('/Home_page/task')}>
          <Text style={{textAlign: 'center', textDecorationLine: 'underline', fontSize: 20, color: COLORS.MAIN_GREEN}}>See More</Text>
            </Pressable>
          {/* <View style={[styles.innerCard]}>
                <Card>
                  <ErranImg height={110} width={190} />
                  <Text style={styles.innerCardText}>Errand/Delivery</Text>
                </Card>
              </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,


  },

  innerContainer: {
    marginTop: 50,
    marginHorizontal: 20,



  },

  firstText: {
    fontWeight: '600',
    fontSize: FONTSIZE.size_30,
    color: COLORS.MAIN_GREEN,



  },

  imageContainer: {


    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -30

  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginVertical: 20,

    width: '100%',
    height: '100%'




  },
  innerCard: {
    width: 175,
    height: 180,
    marginBottom: 20,

  },

  innerCardText: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
    fontWeight: '600',
    color: COLORS.MAIN_GREEN

  }

});