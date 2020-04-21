import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Picker, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

var radio_props = [
  { value: 0, label: 'Male' },
  { value: 1, label: 'Female' },
];
export default class createOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      date: '15-05-2018',
      isVisible:false,
      chooseDate:'',
    };
  }

  handlePicker = (datetime) => {
    this.setState({
        isVisible: false,
        chooseDate: moment(datetime).format('MM-DD-YYYY')
    })
  };

  hidePicker = () => {
    this.setState({
        isVisible: false,
        
    })
  };

  showPicker = () => {
    this.setState({
        isVisible: true,
    })
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView>
            <Text style={styles.headerText}>Create Your Offer</Text>
            {/* <Text style = {{marginHorizontal: wp('5%'), marginTop: hp('3')}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text> */}
            <TextInput
              style={styles.input}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label="Offer Name"
              placeholder="Offer Name"
              placeholderTextColor = {'#666666'}
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />
            <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
              label='Offer Description'
              placeholder="Offer Description"
              placeholderTextColor = {'#666666'}
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />

            <View style={styles.picker}>
            <Picker
                selectedValue={this.state.language}
                style={styles.input2}
                onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                <Picker.Item label="Select Category" value="" />
                <Picker.Item label="Fashion" value="1" />
                <Picker.Item label="Electronics" value="3" />
            </Picker>
            </View>

            <View style={styles.picker}>
            <Picker
                selectedValue={this.state.language}
                style={styles.input2}
                onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                <Picker.Item label="Select Sub Category" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            </View>

            <TouchableOpacity onPress={this.showPicker}>
            <TextInput
              style={styles.input1}
              mode='outlined'
              theme={{
                colors: {
                  primary: '#00cb9c',
                }
              }}
            //   label='Offer Description'
              placeholder="Select Expire Date"
              placeholderTextColor = {'#666666'}
              editable = {false}
              value={this.state.chooseDate}
              onChangeText={chooseDate => this.setState({ chooseDate })}
            />
            </TouchableOpacity>
            
            <DateTimePickerModal
                isVisible={this.state.isVisible}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                mode={'date'}
                datePickerModeAndroid={'spinner'}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('otp')}>
              <Text style={styles.buttonText}>CREATE</Text>
            </TouchableOpacity>
          </ScrollView>
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
  input2: {
    marginTop: wp('4%'),
    marginHorizontal: wp('5%'),
    backgroundColor:'#F1F3F4',
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
  }
});