import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, } from '@expo/vector-icons';
import SignInShoper from './SignInShoper';
import SignInRetailer from './SingInRetailer';
export default class accountType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppper: true,
            retaler: false
        };
    }

    changeApp(){
        if(this.state.shoppper){
            {this.props.navigation.navigate('SignInShoper')}
        }
        else{
            this.props.navigation.navigate('SignInRetailer')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.headerText}>Account Type</Text>
                    <TouchableOpacity onPress={() => this.setState({ shoppper: true, retaler: false, })}
                     style={{
                        width: WIDTH - wp('14%'),
                        backgroundColor: this.state.shoppper? '#00cb9c': '#fff',
                        borderColor: this.state.shoppper? '#fff': '#f0f0f0',
                        borderWidth: this.state.shoppper? 0: 2,
                        height: hp('30%'),
                        marginLeft: wp('7%'),
                        marginTop: hp('6%'),
                        borderRadius: 5
                        }}>
                        <View style={styles.checkIcon}>
                            <AntDesign
                                name='check'
                                type='font-awesome'
                                color='#fff'
                                size={26}
                                containerStyle={{ width: width(10) }} />
                        </View>
                        <Image source = {require('./../image/video1.png')}
                         style = {{
                             width: wp('15%'),
                            height: hp('10%'),
                            alignSelf: 'center',
                            tintColor: this.state.shoppper? '#fff': '#00cb9c',
                        }} />
                        <Text style={{
                            color:  this.state.shoppper? '#fff': '#00cb9c',
                            fontSize: 15,
                            alignSelf: 'center',
                            marginTop: '10%'
                        }}>I AM A SHOPPER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ shoppper: false, retaler: true, })}
                     style={{
                        width: WIDTH - wp('14%'),
                        backgroundColor: this.state.retaler? '#00cb9c': '#fff',
                        borderColor: this.state.retaler? '#fff': '#f0f0f0',
                        borderWidth: this.state.retaler? 0: 2,
                        height: hp('30%'),
                        marginLeft: wp('7%'),
                        marginTop: hp('6%'),
                        borderRadius: 5
                        }}>
                        <View style={styles.checkIcon}>
                            <AntDesign
                                name='check'
                                type='font-awesome'
                                color='#fff'
                                size={26}
                                containerStyle={{ width: width(10) }} />
                        </View>
                        <Image source = {require('./../image/video1.png')}
                         style = {{
                             width: wp('15%'),
                            height: hp('10%'),
                            alignSelf: 'center',
                            tintColor: this.state.retaler? '#fff': '#00cb9c',
                        }} />
                        <Text style={{
                            color:  this.state.retaler? '#fff': '#00cb9c',
                            fontSize: 15,
                            alignSelf: 'center',
                            marginTop: '10%'
                        }}>I AM A RETALER</Text>
                    </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.changeApp() }
                        style={styles.rightIcon}>
                        <AntDesign
                            name='arrowright'
                            type='font-awesome'
                            color='#fff'
                            style={styles.arrow}
                            size={26}
                            containerStyle={{ width: width(10) }} />
                    </TouchableOpacity>
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
        marginLeft: 20,
        marginTop: wp('15%'),
        fontSize: 25,
        color: '#5f5d70',
        fontWeight: 'bold'
    },

    
    checkIcon: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginTop: 15
    },
    rightIcon: {
        backgroundColor: '#00cb9c',
        width: wp('16%'),
        height: hp('9%'),
        borderRadius: wp('25%'),
        marginLeft: wp('75%'),
        marginTop: hp('5%'),
        justifyContent: 'center',
        marginBottom: hp('6%')
    },
    arrow: {
        alignSelf: 'center',

    }
});