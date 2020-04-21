import React from 'react';
import { StyleSheet, Text, View, Image,Alert, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity,Picker } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';

export default class SignUpShoper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      date: '',
      fname: '',
      lname: '',
      email: '',
      mob_number: '',
      location: '',
      countryCode: '',
      Gender:'',
      DOB:'',
      
      errorText: '',
      loading: false
    };
  }

  register(){
  
        
    // const {imagebase} = this.state;
    // console.log(imagebase);
    // return;
    const {fname} = this.state;
    const {lname} = this.state;
    const {email} = this.state;
    const {mob_number} = this.state;
    const {location} = this.state;
    const {countryCode} = this.state;
    const {Gender} = this.state;
    const {DOB} = this.state;

      if(this.state.fname===''){
        alert("Please Enter Your First Name");
        return;
      }
      else if(this.state.lname===''){
        alert("Please Enter Your Last Name");
        return;
      }
      else if(this.state.mob_number===''){
        alert("Please Enter Your Email");
        return;
      }
      else if(this.state.mob_number===''){
        alert("Please Enter Your Mobile number");
        return;
      }
      else if(this.state.location===''){
        alert("Please Enter Your Country");
        return;
    }
      else if(this.state.countryCode===''){
        alert("Please Enter Your Country Code");
        return;
     }
     else if(this.state.Gender == ''){
        alert("Please Enter Your Gender");
        return;
     }
     else if(this.state.DOB == ''){
        alert("Please Enter Your Date of Birth");
        return;
     }
      else{

    fetch('http://aajo.in/public/api/shopper_signup', {

        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
          firstname: fname,
          lastname: lname,
          email: email,
          country_code: countryCode,
          phonenumber: mob_number,
          gender: Gender,
          location: location,
          dob: DOB,
        })
    }).then((response) => response.json())
    .then((responseJson) =>{
        console.log(responseJson);
        // console.log(responseJson.user.id);
        if(responseJson.success == '1')
        {
            this.props.navigation.navigate('otp', {COUNTRYCODE:responseJson.user.country_code, PHONE:responseJson.user.mobilenumber});
            
        }else if (responseJson.message == 'Phonenumber already exist')
        {
          alert('Mobile Number is Already Exist');
            return;
        }
        else if (responseJson.message == 'Email already exist')
        {
          alert('Email is Already Exist');
            return;
        }else
        {
            alert('SOMETHING WENT WRONG !');
            return;
        }
    })
    .catch((error) => {
        alert(error);
    });
}

}

  onSigUp(fname, lname, email, mob_number, cuntry_code, Gender, location) {
    this.setState({ errorText: '', loading: true })
    if (this.state.fname === '' || this.state.lname === '' || this.state.email === '' ||  this.state.radio_props === '' || this.state.mob_number || this.state.cuntry_code || this.state.location) {
      this.setState({loading: false})
      return Alert.alert('Plase enter all feilds')
    }
    else if (this.state.mob_number.length < 11) {
      this.setState({loading: false})
      return Alert.alert('Please enter corrent phone number')
    }
    else {
      this.setState({loading: true})
      axios.post(`http://aajo.in/public/api/shopper_signup`,
        {
          'firsname': fname,
          'lastname': lname,
          'email': email,
          'country_code': cuntry_code,
          'phonenumber': mob_number,
          'gender': radio_props,
          'location': location
        }
      )
      .then((response) =>{
        console.log(response)
        if(response.data.message === "Your account is suspended."){
          this.setState({loading: false})
          Alert.alert('User has been successully sign up')
          this.onSignUpSuccess();

        }
        else{
          Alert.alert('User already Exist')
          this.onSigupFail()
        }
      })
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        {/* <KeyboardAvoidingView behavior="padding"> */}
          <ScrollView>
            <Text style={styles.headerText}>Create{'\n'}your account</Text>
            <TextInput
              style={styles.input}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='First Name'
              placeholder="First Name"
              placeholderTextColor={'#666666'}
              value={this.state.fname}
              onChangeText={fname => this.setState({ fname })}
            />
            <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Last Name'
              placeholder="Last Name"
              placeholderTextColor={'#666666'}
              value={this.state.lname}
              onChangeText={lname => this.setState({ lname })}
            />
            <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Email ID'
              placeholder="Email ID"
              placeholderTextColor={'#666666'}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Mobile Number'
              placeholder="Mobile Number"
              placeholderTextColor={'#666666'}
              value={this.state.mob_number}
              onChangeText={mob_number => this.setState({ mob_number })}
            />
            {/* <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Location'
              placeholder="Location"
              placeholderTextColor={'#666666'}
              value={this.state.location}
              onChangeText={location => this.setState({location })}

            /> */}
            <View>

            <Picker
                selectedValue={this.state.location}
                style={styles.input2}
                onValueChange={(itemValue, itemIndex) => this.setState({ location: itemValue })}>
                <Picker.Item label="Select Country" value="" />
                <Picker.Item label="Pakistan" value="Pakistan" />
                <Picker.Item label="India" value="India" />
            </Picker>
            </View>

            <View>
            <Picker style={styles.input2}
                selectedValue={this.state.countryCode}
                onValueChange={(itemValue) =>
                    this.setState({ countryCode: itemValue })}>
                <Picker.Item label="Select Country Code" value="" />
                <Picker.Item label="+92" value="+92" />
                <Picker.Item label="+91" value="+91" />
            </Picker>
            </View>

            <View>
            <Picker style={styles.input2}
                selectedValue={this.state.Gender}
                onValueChange={(itemValue) =>
                    this.setState({ Gender: itemValue })}>
                <Picker.Item label="Gender" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker>
            </View>
            {/* <View style={styles.location}>
              <MaterialIcons
                // reverse
                name='location-searching'
                type='font-awesome'
                color='#666666'
                size={24}
              />
            </View> */}
            {/* <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Country Code'
              placeholder="Country Code"
              placeholderTextColor={'#666666'}
              value={this.state.cuntry_code}
              onChangeText={cuntry_code => this.setState({ cuntry_code })}
            /> */}
            {/* <View style={styles.mainRadioView}>
              <Text style={styles.choose}>Choose Gender</Text>
              <View style={styles.radioButton}>
                <RadioForm
                  radio_props={this.state.radio_props}
                  style={{ marginTop: 0, }}
                  initial={0}
                  radioStyle={{ padding: 3, marginRight: 50 }}
                  buttonColor={'#666666'}
                  buttonSize={10}
                  selectedButtonColor={'#00cb9c'}
                  formHorizontal={true}
                  onPress={gender => this.setState({gender })}
                  //buttonOuterSize={10}
                />
              </View>
            </View> */}
            <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Date of Birth'
              placeholder="Date of Birth"
              placeholderTextColor={'#666666'}
              value={this.state.DOB}
              onChangeText={DOB => this.setState({ DOB })}

            />
            <View style={styles.person}>
              {/* <MaterialIcons
                // reverse
                name='person-pin'
                type='font-awesome'
                color='#666666'
                size={24}
              /> */}
            </View>
            
      <TouchableOpacity style={styles.button}
        onPress={() => this.register()}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

            <View style={styles.signupView}>
              <Text style={styles.alresdy}>Already have an account?</Text>
              <Text onPress={() => this.props.navigation.navigate('SignInShoper')}
                style={styles.signupText}>Sign In</Text>
            </View>
          </ScrollView>
        {/* </KeyboardAvoidingView> */}
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
    marginLeft: wp('5%'),
    marginTop: wp('10%'),
    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: '#5f5d70'
  },
  input: {
    marginTop: wp('12%'),
    marginHorizontal: wp('5%'),
    backgroundColor: '#fff'
  },
  input1: {
    marginTop: wp('4%'),
    marginHorizontal: wp('5%'),
    backgroundColor: '#fff'
  },
  button: {
    marginTop: hp('5%'),
    alignItems: 'center',
    backgroundColor: '#00cb9c',
    borderRadius: wp('10%'),
    height: 50,
    marginHorizontal: wp('10%')
  },
  buttonText: {

    fontSize: 22,
    color: '#fff',
    marginTop: hp('1.5%')
  },
  signupView: {
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%')
  },
  alresdy: {
    fontSize: hp('2.5%'),
    color: '#666666'
  },
  signupText: {
    fontSize: hp('2.5%'),
    marginTop: hp('1%'),
    color: '#00cb9c',
    fontWeight: 'bold'
  },
  location: {
    position: 'absolute',
    marginLeft: wp('80%'),
    marginTop: hp('77.5%')
  },
  person: {
    position: 'absolute',
    marginLeft: wp('80%'),
    marginTop: hp('115%')
  },
  radioButton: {
    marginRight: 30,
    marginTop: 10
  },
  mainRadioView: {
    marginLeft: wp('5%'),
    marginTop: hp('3%')
  },
  choose: {
    fontSize: 15,
    color: '#666666'
  },
  input2: {
    marginTop: wp('4%'),
    marginHorizontal: wp('5%'),
    backgroundColor:'#F1F3F4',
  },
});