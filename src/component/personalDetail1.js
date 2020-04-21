import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
export default class personalDetail extends React.Component {
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
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView>
                        <Text style={styles.headerText}>Fill in your Business details</Text>

                        <TextInput
                            style={styles.input1}
                            mode='outlined'
                            theme={{
                                colors: {
                                    primary: '#00cb9c',
                                }
                            }}
                            label='Shop Name'
                            placeholder="Shop Name"
                            placeholderTextColor={'#666666'}
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
                            label='Shop Address'
                            placeholder="Shop Address"
                            placeholderTextColor={'#666666'}
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
                            label='City'
                            placeholder="City"
                            placeholderTextColor={'#666666'}
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
                            label='Location'
                            placeholder="Location"
                            placeholderTextColor={'#666666'}
                            value={this.state.text}
                            onChangeText={text => this.setState({ text })}

                        />
                        <View style={styles.location}>
                            <MaterialIcons
                                // reverse
                                name='location-searching'
                                type='font-awesome'
                                color='#666666'
                                size={24}
                            />
                        </View>
                        <View style={styles.buttom}>
                            <Text style={styles.skip}>Back</Text>
                            <View style={styles.dotView}>
                                <View style={styles.dot}></View>
                                <View style={styles.dot}></View>
                                <View style={styles.dot1}></View>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('personalDetail2')}
                                style={styles.rightIcon}>
                                <AntDesign
                                    name='arrowright'
                                    type='font-awesome'
                                    color='#fff'
                                    style={styles.arrow}
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </TouchableOpacity>
                        </View>
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
        marginTop: wp('5%'),
        marginBottom: wp('5%'),
        fontSize: hp('3%'),
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
    location: {
        position: 'absolute',
        marginLeft: wp('80%'),
        marginTop: hp('52%')
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
    buttom: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        marginTop: wp('35%'),
        justifyContent: 'space-between'
    },
    dotView: {
        flexDirection: 'row',
        marginTop: wp('15%'),

    },
    dot: {
        backgroundColor: '#00cb9c',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: wp('1%'),
    },
    dot1: {
        backgroundColor: '#f0f0f0',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: wp('1%'),
    },
    rightIcon: {
        backgroundColor: '#00cb9c',
        width: wp('16%'),
        height: hp('9%'),
        borderRadius: wp('25%'),
        marginTop: hp('5%'),
        justifyContent: 'center',
        marginBottom: hp('6%')
    },
    arrow: {
        alignSelf: 'center',

    },
    skip: {
        marginTop: hp('8%'),

    },
});