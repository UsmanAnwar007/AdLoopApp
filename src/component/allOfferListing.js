import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class allOfferListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
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
                            <Text style={styles.categoryName}>TVs in Cars</Text>
                        </View>
                    </View>
                </View>
            <ScrollView>
                <View style={styles.mainAdsView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('offerDetail')}
                     style={styles.adsView}>
                        <Image source={require('./../image/ads1.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                        <View style={styles.mainText}>
                            <View style={styles.activeView}>
                                <View><Text style={styles.offer}>50% off</Text></View>
                            </View>
                            <Text style={styles.top1} >Lorem Ipsum is simply{'\n'}dummy text of the{'\n'}printing and typesetting</Text>
                            <View style={styles.dateView}>
                                <View><Text style={styles.top}>By Seven top retailer</Text></View>
                                <View><Text style={styles.top}>22 Jun</Text></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('offerDetail')}
                     style={styles.adsView}>
                        <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                        <View style={styles.mainText}>
                            <View style={styles.activeView}>
                                <View><Text style={styles.offer}>50% off</Text></View>
                            </View>
                            <Text style={styles.top1} >Lorem Ipsum is simply{'\n'}dummy text of the{'\n'}printing and typesetting</Text>
                            <View style={styles.dateView}>
                                <View><Text style={styles.top}>By Seven top retailer</Text></View>
                                <View><Text style={styles.top}>22 Jun</Text></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('offerDetail')}
                     style={styles.adsView}>
                        <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                        <View style={styles.mainText}>
                            <View style={styles.activeView}>
                                <View><Text style={styles.offer}>50% off</Text></View>
                            </View>
                            <Text style={styles.top1} >Lorem Ipsum is simply{'\n'}dummy text of the{'\n'}printing and typesetting</Text>
                            <View style={styles.dateView}>
                                <View><Text style={styles.top}>By Seven top retailer</Text></View>
                                <View><Text style={styles.top}>22 Jun</Text></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('offerDetail')}
                     style={styles.adsView}>
                        <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                        <View style={styles.mainText}>
                            <View style={styles.activeView}>
                                <View><Text style={styles.offer}>50% off</Text></View>
                            </View>
                            <Text style={styles.top1} >Lorem Ipsum is simply{'\n'}dummy text of the{'\n'}printing and typesetting</Text>
                            <View style={styles.dateView}>
                                <View><Text style={styles.top}>By Seven top retailer</Text></View>
                                <View><Text style={styles.top}>22 Jun</Text></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
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
        
    },
    mainAdsView: {
        marginTop: hp('3%')
    },
    adsView: {
        backgroundColor: '#fff',
        borderColor: '#ededee',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 3,
        paddingHorizontal: wp('1%'),
        marginHorizontal: wp('3%'),
        marginBottom: wp('2%'),
        paddingTop: wp('1%')
    },
    activeView: {
        flexDirection: 'row',
    },
    offer: {
        fontSize: 20,
        color: '#5f5d70',
        marginTop: hp('2%')
    },
    top1: {
        fontSize: 15,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    top: {
        fontSize: 12,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    mainText: {
        marginLeft: wp('3%')
    },
    dateView:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});