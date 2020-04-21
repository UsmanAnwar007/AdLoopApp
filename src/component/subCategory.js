import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class subCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ backgroundColor: '#f4f4f8', height: hp('10%'), }}>
                    <View style={{ marginTop: hp('1%'), marginBottom: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={styles.arrow}>
                            <AntDesign name='arrowleft' color='#5f5d70' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('home')
                                } />
                        </View>
                        <View style={styles.categoryView}>
                            <Text style={styles.categoryName}>Cars</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <Text style = {styles.cars}>Cars</Text>
                    <View style = {{ borderBottomColor: '#e8e8e9', borderBottomWidth: 2, marginHorizontal: wp('5%'), marginVertical: hp('2%')}}></View>
                
                    <Text style = {styles.cars}>Commmercial Vehicles</Text>
                    <View style = {{ borderBottomColor: '#e8e8e9', borderBottomWidth: 2, marginHorizontal: wp('5%'), marginVertical: hp('2%')}}></View>
                
                    <Text style = {styles.cars}>Spare parts</Text>
                    <View style = {{ borderBottomColor: '#e8e8e9', borderBottomWidth: 2, marginHorizontal: wp('5%'), marginVertical: hp('2%')}}></View>
                
                    <Text style = {styles.cars}>Other Vehicles</Text>
                    <View style = {{ borderBottomColor: '#e8e8e9', borderBottomWidth: 2, marginHorizontal: wp('5%'), marginVertical: hp('2%')}}></View>
                
                    <Text style = {styles.cars}>View All</Text>
                    <View style = {{ borderBottomColor: '#e8e8e9', borderBottomWidth: 2, marginHorizontal: wp('5%'), marginVertical: hp('2%')}}></View>
                
                    </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    categoryView: {
        justifyContent: 'center',
        marginLeft: wp('2%'),
        marginTop: hp('2%')

    },
    arrow: {
        marginTop: hp('2%')
    },
    categoryName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cars:{
        marginLeft: wp('5%'),
        marginVertical: hp('2%'),
        fontSize: 18,
        
    }
});