import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class saveOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ marginTop: hp('3%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <AntDesign name='arrowleft' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                    <View style={{ marginLeft: wp('62%') }}>
                        <Entypo name='share' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                    <View style={{ marginTop: 0, marginLeft: wp('4%') }}>
                        <AntDesign name='hearto' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('saveOffer')
                            } />
                    </View>
                </View>
                <ScrollView>
                    <Image source={require('./../image/ads3.png')} style={{ width: wp('110.5%'), marginLeft: wp('-5%'), height: hp('35%'), marginTop: hp('3%') }} />
                    <View style={styles.mainView}>
                        <View style={styles.offer}>
                            <Text style={styles.offerText}>Buy 1 Get 1 free</Text>
                            <Text>21 Jan</Text>
                        </View>
                        <Text style={styles.lorem}>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</Text>
                        <Text style={styles.readMore}>READ MORE</Text>
                        <Text style={styles.expire}>Offer expires in  12th 15m 56s</Text>
                        <View style={styles.border}></View>
                        <Text style={styles.recent}>RECENT PEOPLE</Text>
                        <View style={styles.profile}>
                            <Image source={require('./../image/user1.png')} style={{ width: wp('12.5%'), height: hp('7%'), marginRight: wp('3%'), marginTop: wp('3%'), }} />
                            <View>
                                <Text style={styles.profileText}>Parvathi Clothing</Text>
                                <Text style={styles.profileTime}>Retailer since 2018</Text>
                            </View>
                        </View>
                        <View style={styles.dotView}>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <Text style={styles.rating}>4/5</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('offerProfile')} 
                         style={styles.allView}>
                            <Text style={styles.allViewText}>VIEW PROFILE</Text>
                            <View style={{ marginLeft: 10 }}>
                                <AntDesign name='arrowright' color='#00cb9c' size={22}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.border}></View>
                    </View>
                    <View style = {styles.saveOfferview}>
                        <View>
                        <Text style = {styles.codeText}>Code</Text>
                        <Text style = {styles.codeText}>SDJKFJKDFJLSJF</Text>
                        </View>
                        <Text style = {styles.saveOfferText}>SAVE OFFER</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.buttomBotton}>
                            <View style={styles.arrow}>
                                <MaterialIcons name='chat-bubble' color='#fff' size={22}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                            </View>
                            <TouchableOpacity
                                style={styles.chatButton}
                                onPress={() => this.props.navigation.navigate('#')}>
                                <Text style={styles.chatButtonText}>CHAT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttomBotton}>
                            <View style={styles.arrow}>
                                <Ionicons name='ios-call' color='#fff' size={22}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                            </View>
                            <TouchableOpacity
                                style={styles.chatButton}
                                onPress={() => this.props.navigation.navigate('#')}>
                                <Text style={styles.chatButtonText}>CALL</Text>
                            </TouchableOpacity>
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
    headerText: {
        marginLeft: wp('3%'),
        marginTop: hp('0%'),
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#5f5d70'
    },
    offer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: wp('5%'),
    },
    offerText: {
        fontSize: 18,
        color: '#5f5d70'
    },
    date: {
        fontSize: 15,
        color: '#666666'
    },
    mainView: {
        marginHorizontal: wp('5%'),

    },
    lorem: {
        color: '#666666',
        fontSize: 12
    },
    readMore: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00cb9c',
        marginTop: wp('2%'),
        marginBottom: wp('2%'),
    },
    expire: {
        fontSize: 12,
        color: '#5f5d70'
    },
    border: {
        borderBottomColor: '#e8e8e9',
        borderBottomWidth: 2,
        marginHorizontal: wp('0%'),
        marginVertical: hp('2%')
    },
    recent: {
        fontSize: 15,
        color: '#666666'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: wp('1%'),
    },
    profileText: {
        fontSize: 20
    },
    profileTime: {
        fontSize: 11
    },
    dotView: {
        flexDirection: 'row',
        marginLeft: wp('16%'),
        marginTop: wp('1%'),

    },
    dot: {
        backgroundColor: '#00cb9c',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: wp('1%'),
    },
    rating: {
        marginLeft: wp('3%'),
        color: '#666666',
        marginTop: wp('-1.5%'),

    },
    allView: {
        marginTop: hp('2%'),
        flexDirection: 'row'
    },
    allViewText: {
        fontSize: 15,
        marginLeft: wp('16%'),
        fontWeight: 'bold',
        color: '#00cb9c'
    },
    chatButton: {
        alignItems: 'center',
    },
    chatButtonText: {
        fontSize: 22,
        color: '#fff',
        marginTop: hp('2%'),
        marginLeft: wp('2%'),

    },
    buttomBotton: {
        flexDirection: 'row',
        marginTop: hp('2%'),
        height: hp('8%'),
        width: wp('51%'),
        backgroundColor: '#00cb9c',
        borderEndWidth: 2,
        borderEndColor: '#fff'
    },
    arrow:{
        justifyContent: 'center',
        marginLeft: wp('12%'),
        marginTop: wp('1%'),
    },
    saveOfferview:{
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        justifyContent: 'space-between',
        marginBottom: wp('10%'),

    },
    codeText:{
        color: '#666666',
        fontSize: 15
    },
    saveOfferText:{
        color:'#00cb9c',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: wp('5%'),

    }
});