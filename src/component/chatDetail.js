import React from 'react';
import { StyleSheet, TextInput, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, SimpleLineIcons, FontAwesome, Feather, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class chatDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ backgroundColor: '#f4f4f8', }}>
                    <View style={{ marginTop: hp('1%'), marginBottom: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={styles.arrow}>
                            <AntDesign name='arrowleft' color='#5f5d70' size={26}
                                onPress={
                                    () =>  this.props.navigation.navigate('home')
                                } />
                        </View>
                        <View style={styles.profile}>
                            <Image source={require('./../image/user1.png')} style={{ width: wp('15%'), height: hp('8.5%'), marginRight: wp('3%'), }} />
                            <View>
                                <Text style={styles.profileText}>Chirng</Text>
                                <Text style={styles.profileTime}>Last seen yesterday at 17:56</Text>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <SimpleLineIcons name='options' color='#5f5d70' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                    </View>
                </View>
                <ScrollView>

                </ScrollView>
                <View style={styles.adsView}>
                    <Image source={require('./../image/ads3.png')} style={{ width: wp('18%'), height: hp('10%'), marginTop: hp('-0.5%') }} />
                    <View style={styles.offerView}>
                        <View><Text style={styles.offer}>50% off</Text></View>
                        <View><Text style={styles.top}>By Seven top retailer</Text></View>
                    </View>
                </View>
                <KeyboardAvoidingView behavior='padding' >
                    <View style={{ flexDirection: 'row', backgroundColor: '#f4f4f8', marginHorizontal: wp('2%'), height: hp('9%'), marginBottom: hp('1%'), padding: 7 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <TextInput
                                    placeholder={'Type a message'}
                                    style={{ backgroundColor: '#fff', borderRadius: 5, padding: 10, height: hp('7%'), width: wp('70%') }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: wp('3.5%') }}>
                                <View style={{ justifyContent: 'center', marginRight: wp('5') }}>
                                    <Entypo
                                        name='attachment'
                                        type='font-awesome'
                                        color='#5f5d70'
                                        size={22}
                                        containerStyle={{ width: width(10) }}
                                    />
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <FontAwesome
                                        name='microphone'
                                        type='font-awesome'
                                        color='#5f5d70'
                                        size={22}
                                        containerStyle={{ width: width(10) }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
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
    arrow: {
        justifyContent: 'center',
        marginRight: wp('3%'),
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileText: {
        fontSize: 20
    },
    profileTime: {
        fontSize: 11
    },
    option: {
        justifyContent: 'center',
        marginLeft: wp('14%'),
    },
    TextInput: {
        backgroundColor: '#000',
    },
    adsView: {
        backgroundColor: '#fff',
        borderColor: '#ededee',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 3,
        paddingHorizontal: wp('1%'),
        marginHorizontal: wp('3%'),
        marginVertical: wp('2%'),
        paddingTop: wp('1%')
    },
    offerView:{
        marginLeft: wp('2%')
    },
    offer: {
        fontSize: 20,
        color: '#5f5d70',
        marginTop: hp('0%')
    },
    top: {
        fontSize: 12,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('0.5%'),
    },
});