import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class redeemed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.mainAdsView}>
                        <View style={styles.adsView}>
                            <Image source={require('./../image/ads1.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                            <View style={styles.mainText}>
                                <View style={styles.activeView}>
                                    <View><Text style={styles.offer}>50% off</Text></View>
                                    <View><Text style={styles.active}>Active</Text></View>
                                </View>
                                <Text style={styles.top1} >Lorem Ipsum is simply{'\n'}dummy text of the{'\n'}printing and typesetting</Text>
                                <View style={styles.dateView}>
                                    <View><Text style={styles.top}>By Seven top retailer</Text></View>
                                    <View><Text style={styles.top}>22 Jun</Text></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.greenView}>
                            <View style={styles.codeView}>
                                <Text style={styles.codeTextBold}>Code:</Text>
                                <Text style={styles.codeText}>KJAHSKLDMAKDH</Text>
                            </View>
                            <View style={styles.timeViewFirst}>
                                <Text style={styles.codeTextBold}>Redeemed on</Text>
                                <Text style={styles.codeText}>12 Jan, 15:30 pm</Text>
                            </View>
                        </View>
                        <View style={styles.adsViewSecond}>
                            <View style={{ flexDirection: 'row',}}>
                                <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                                <View style={styles.mainText}>
                                    <View style={styles.activeView}>
                                        <View><Text style={styles.offer}>50% off</Text></View>
                                        <View><Text style={styles.active}>Active</Text></View>
                                    </View>
                                    <Text style={styles.top1} >Lorem Ipsum is simply{'\n'}dummy text of the{'\n'}printing and typesetting</Text>
                                    <View style={styles.dateView}>
                                        <View><Text style={styles.top}>By Seven top retailer</Text></View>
                                        <View><Text style={styles.top}>22 Jun</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style = {{ borderBottomColor: '#e8e8e9', borderBottomWidth: 2, marginHorizontal: wp('5%'), marginVertical: hp('2%')}}></View>
                            <View style={styles.WhiteView}>
                                <View style={styles.codeView}>
                                    <Text style={styles.codeTextsimple}>Code:</Text>
                                    <Text style={styles.codeText3}>KJAHSKLDMAKDH</Text>
                                </View>
                                <View style={styles.timeView}>
                                    <Text style={styles.codeTextsimple}>Redeemed on</Text>
                                    <Text style={styles.codeText3}>12 Jan, 15:30 pm</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f9',
        // alignItems: 'center',
        // justifyContent: 'center',
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
        paddingTop: wp('1%')
    },
    adsViewSecond: {
        backgroundColor: '#fff',
        borderColor: '#ededee',
        borderWidth: 2,
        borderRadius: 3,
        paddingHorizontal: wp('1%'),
        marginHorizontal: wp('3%'),
        paddingTop: wp('1%'),
        marginBottom: hp('5%')
    },
    activeView: {
        flexDirection: 'row',
    },
    active: {
        color: '#00cb9c',
        borderColor: '#00cb9c',
        borderWidth: 1,
        padding: wp('1%'),
        borderRadius: wp('5%'),
        marginTop: hp('2%'),
        marginLeft: wp('12%')
    },
    inactive: {
        color: '#fd7181',
        borderColor: '#fd7181',
        borderWidth: 1,
        padding: wp('1%'),
        borderRadius: wp('5%'),
        marginTop: hp('2%'),
        marginLeft: wp('12%')
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
    dateView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    codeText: {
        alignSelf: 'center',
        color: '#fff',
        marginTop: hp('1%'),
        fontSize: 15,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    codeTextBold: {
        alignSelf: 'center',
        color: '#fff',
        marginTop: hp('1%'),
        fontSize: 15,
        alignSelf: 'flex-start',
    },
    codeTextsimple: {
        alignSelf: 'center',
        color: '#666666',
        marginTop: hp('1%'),
        fontSize: 15,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    },
    codeText3: {
        alignSelf: 'center',
        color: '#666666',
        marginTop: hp('1%'),
        fontSize: 15,
        alignSelf: 'flex-start',
    },
    greenView: {
        backgroundColor: '#00cb9c',
        marginHorizontal: wp('9%'),
        height: hp('10%'),
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: hp('3%'),
        flexDirection: 'row'
    },
    WhiteView: {
        marginHorizontal: wp('3%'),
        height: hp('10%'),
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: hp('3%'),
        flexDirection: 'row'
    },

    codeView: {
        flexDirection: 'column',
        marginLeft: wp('2%')
    },
    timeView: {
        flexDirection: 'column',
        marginLeft: wp('13%')
    },
    timeViewFirst: {
        flexDirection: 'column',
        marginLeft: wp('5%')

    }

});