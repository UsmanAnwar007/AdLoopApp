import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Alert
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, } from '@expo/vector-icons';
//import axios from 'axios';
//import SpinnerScreen from '../views/Spinner';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Phone:'',
            Countrycode:'',
            Otp:'',
        };
    }
    componentDidMount(){
        this.setState({
            Phone: this.props.navigation.getParam('PHONE'),
            Countrycode: this.props.navigation.getParam('COUNTRYCODE'),
        });
        // console.log(Phone);
        // console.log(Countrycode);
    }

    register = () =>{

        // alert('ok');
        const {Phone} = this.state;
        const {Countrycode} = this.state;
        const {Otp} = this.state;

        if(this.state.Phone ==''){
            alert("Please Enter Phone Number");
            return;
          }
          else if(this.state.Countrycode =='' ){
            alert("Please Enter Your Country Code");
            return;
         }
          else{

        fetch('http://aajo.in/public/api/shopper_otpverify', {

            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                phonenumber: Phone,
                country_code: Countrycode,
                code: Otp,
            })
        }).then((response) => response.json())
        .then((responseJson) =>{
            // console.log(responseJson);
            // console.log(responseJson.user.id);
            if(responseJson.message == 'Phonenumber already exist')
            {
                alert('This Number Is Already Exist');
                return;
            }
            if(responseJson.success == '1')
            {
                // alert(responseJson.user.id)
                // await AsyncStorage.setItem("COUNTRYCODE", responseJson.user.country_code);
                // AsyncStorage.setItem("PHONE", responseJson.user.phonenumber);
                this.props.navigation.navigate('SignInShoper', {uid:responseJson.user.id});
                // this.props.navigation.navigate('otp', {uid:responseJson.user.id});
            }
            if(responseJson.success == '0')
            {
                alert('OTP Expire Please Resend Otp');
                return;
            }

            // alert(responseJson);
        })
        .catch((error) => {
            alert(error);
        });
    }

    }

    render() {

        return (
            <View style={styles.safeArea}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={styles.container}>
                    {/* <View style={styles.location}>
                        <AntDesign
                        onPress={() => this.props.navigation.navigate('SignUpRetailer')}
                            // reverse
                            name='arrowleft'
                            type='font-awesome'
                            color='#666666'
                            size={24}
                        />
                    </View> */}
                    <Text style={styles.headerText}>OTP{'\n'}Verification</Text>
                    <Text style={[styles.txtCreateAccount]}>OTP has been sent to your mobile number</Text>

                    <View style={styles.containContent}>

                        <OTPInputView
                            style={styles.inputOtp}
                            pinCount={4}
                            code={this.state.Otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            onCodeChanged={Otp => { this.setState({ Otp }) }}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                            })}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.register()}>
                            <Text style={styles.buttonText}>VERIFY</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style = {styles.resend}>Resend OTP in <Text style = {styles.time}>30</Text></Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        flexDirection: 'column',
        //alignItems: 'stretch',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    containContent: {
        flex: 2.4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: hp('5%')
    },
    headerText: {
        marginLeft: wp('0%'),
        marginTop: wp('8%'),
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: '#666666'
    },
    location: {
        marginLeft: wp('0%'),
        marginTop: hp('3%')
    },
    button: {
        marginTop: hp('3%'),
        width: wp('80%'),
        alignItems: 'center',
        backgroundColor: '#00cb9c',
        borderRadius: wp('10%'),
        height: 50,
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        marginTop: hp('1.5%')
    },
    txtCreateAccount: {
        marginTop: hp('2%'),
        fontSize: 15,
        color: '#666666'
    },
    inputOtp: {
        width: wp('85%'),
        height: hp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    underlineStyleBase: {
        width: wp('15%'),
        height: hp('8%'),
        borderWidth: 0,
        fontSize: 20,
        borderBottomWidth: 4,
        color: '#000'
    },
    underlineStyleHighLighted: {
        borderColor: "#00cb9c",
    },
    resend:{
        alignSelf: 'center',
        marginBottom: hp('3%'),
        color: '#666666'
    },
    time:{
        color: '#00cb9c'
    }
});
