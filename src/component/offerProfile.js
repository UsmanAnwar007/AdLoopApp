import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class offerProfile extends React.Component {
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
                    <View style={{ marginTop: hp('3%'), marginBottom: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginLeft: wp('0%') }}>
                            <AntDesign name='arrowleft' color='#5f5d70' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                        <View style={{ marginLeft: wp('72%'), }}>
                            <Entypo name='share' color='#5f5d70' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                    </View>
                </View>
                <ScrollView >
                    <View style={styles.scroll}>
                        <View style={styles.profile}>
                            <View style={styles.profileImage}>
                                <Image source={require('./../image/user1.png')} style={{ width: wp('12.5%'), height: hp('7%'), marginRight: wp('3%'), marginTop: wp('3%'), }} />
                                <Text style={styles.profileName}>Parvathi Clothing</Text>
                            </View>
                            <View style={styles.offerView}>
                                <Text style={styles.profileText}>07</Text>
                                <Text style={styles.profileTime}>OFFERS</Text>
                            </View>
                            <View style={styles.customer}>
                                <Text style={styles.profileText}>22</Text>
                                <Text style={styles.profileTime}>CUSTOMER{'\n'}AVAILS</Text>
                            </View>
                        </View>
                        <View style={styles.followView}>
                            <View>
                                <Text style={styles.fashionText}>Trinty Fashion</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.chatButton}
                                onPress={() => this.props.navigation.navigate('#')}>
                                <Text style={styles.chatButtonText}>FOLLOW</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.send}>
                            <Text style={styles.address}>Address line, 1-192, forward lane</Text>
                            <Ionicons name='ios-send' color='#5f5d70' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                        <Text style={styles.fashion}>FASHION & CLOTHING</Text>

                        <View style={styles.dotView}>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                        </View>
                        <View style={styles.border}></View>
                        <Text style={styles.history}>Offer history</Text>
                        <View style={styles.mainAdsView}>
                            <View style={styles.adsView}>
                                <Image source={require('./../image/ads1.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                                <Text style={styles.offer}>50% off</Text>
                                <Text style={styles.lorem}>Lorem ipsum is a{'\n'} placeholder text{'\n'} commonly used to{'\n'} demonstrate the {'\n'} document </Text>
                                <Text style={styles.top} >Ends in 12th 16m 55s</Text>
                            </View>
                            <View style={styles.adsView1}>
                                <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                                <Text style={styles.offer}>Buy 1 Get 1 Free</Text>
                                <Text style={styles.lorem}>Lorem ipsum is a{'\n'} placeholder text{'\n'} commonly used to{'\n'} demonstrate the {'\n'} document </Text>
                                <Text style={styles.top} >Ends in 12th 16m 55s</Text>
                            </View>
                        </View>
                        <View style={styles.mainAdsView}>
                            <View style={styles.adsView}>
                                <Image source={require('./../image/ads1.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                                <Text style={styles.offer}>50% off</Text>
                                <Text style={styles.lorem}>Lorem ipsum is a{'\n'} placeholder text{'\n'} commonly used to{'\n'} demonstrate the {'\n'} document </Text>
                                <Text style={styles.top} >Ends in 12th 16m 55s</Text>
                            </View>
                            <View style={styles.adsView1}>
                                <Image source={require('./../image/ads3.png')} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                                <Text style={styles.offer}>Buy 1 Get 1 Free</Text>
                                <Text style={styles.lorem}>Lorem ipsum is a{'\n'} placeholder text{'\n'} commonly used to{'\n'} demonstrate the {'\n'} document </Text>
                                <Text style={styles.end} >Offer Ended</Text>
                            </View>
                        </View>
                    </View>
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

    mainView: {

    },
    border: {
        borderBottomColor: '#e8e8e9',
        borderBottomWidth: 2,
        marginVertical: hp('3%')
    },
    recent: {
        fontSize: 15,
        color: '#666666'
    },
    dotView: {
        flexDirection: 'row',
        marginTop: wp('1%'),

    },
    dot: {
        backgroundColor: '#00cb9c',
        width: 10,
        height: 3,
        marginRight: wp('1%'),
    },
    scroll: {
        marginHorizontal: wp('5%'),

    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: wp('1%'),

    },
    profileText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: wp('2%'),
        color: '#5f5d70'

    },
    profileTime: {
        fontSize: 11,
        color: '#666666'
    },
    offerView: {
        marginLeft: wp('23%'),
        marginRight: wp('8%'),
    },
    profileImage: {
        flexDirection: 'column'
    },
    customer: {
        marginTop: wp('3%'),

    },
    profileName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: wp('3%'),
    },
    chatButtonText: {
        fontSize: 15,
        color: '#fff',
        marginTop: hp('1.3%'),

    },
    chatButton: {
        alignItems: 'center',
        borderRadius: wp('6%'),
        height: hp('6%'),
        width: wp('25%'),
        backgroundColor: '#00cb9c',
    },
    followView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('2%'),
    },
    fashionText: {
        color: '#666666'
    },
    send: {
        flexDirection: 'row'
    },
    address: {
        fontSize: 12,
        color: '#666666',
        marginRight: wp('2%')
    },
    fashion: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00cb9c'
    },
    history: {
        fontSize: 18,
        color: '#5f5d70',
        fontWeight: 'bold'
    },
    mainAdsView: {
        flexDirection: 'row',
        marginTop: hp('1%')
    },
    adsView: {
        backgroundColor: '#fff',
        borderColor: '#ededee',
        borderWidth: 2,
        borderRadius: 3,
        paddingHorizontal: wp('1%'),
        marginLeft: wp('0%'),
        marginRight: wp('1%'),
        paddingTop: wp('1%')
    },
    adsView1: {
        paddingHorizontal: wp('1%'),
        paddingTop: wp('1%'),
        backgroundColor: '#fff',
        borderColor: '#ededee',
        borderWidth: 2,
        borderRadius: 3,
    },
    offer: {
        fontSize: 20,
        color: '#5f5d70',
        marginTop: hp('2%')
    },
    top: {
        fontSize: 15,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    end: {
        fontSize: 15,
        color: 'red',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    lorem: {
        color: '#666666',
        fontSize: 15
    },

});