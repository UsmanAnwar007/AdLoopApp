import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
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
            type: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView>
                        <Text style={styles.headerText}>Shop Category</Text>
                        <View style={styles.Picker}>
                            <Picker
                                selectedValue={this.state.type}
                                mode = {'dropdown'}
                                onValueChange={(item2) => this.setState({ type: item2 })}>
                                <Picker.Item label='Car' value='Car' />
                                <Picker.Item label='Van' value='Van' />
                                <Picker.Item label='Bus' value='Bus' />
                            </Picker>
                        </View>
                        <View style={styles.border}></View>

                        <View style={styles.main}>
                            <Text >SELECT SHOP SUB CATEGORY</Text>
                            <TouchableOpacity style = {styles.text}>
                                <Text style = {styles.categoryName}>Television</Text>
                                <View style={styles.checkIcon}>
                                    <AntDesign
                                        name='check'
                                        type='font-awesome'
                                        color='#00cb9c'
                                        size={26}
                                        containerStyle={{ width: width(10) }} />
                                </View>
                            </TouchableOpacity>
                        <View style={styles.border}></View>
                            <TouchableOpacity style = {styles.text}>
                                <Text style = {styles.categoryName}>Television</Text>
                                <View style={styles.checkIcon}>
                                    <AntDesign
                                        name='check'
                                        type='font-awesome'
                                        color='#000'
                                        size={26}
                                        containerStyle={{ width: width(10) }} />
                                </View>
                            </TouchableOpacity>
                        <View style={styles.border}></View>
                            <TouchableOpacity style = {styles.text}>
                                <Text style = {styles.categoryName}>Television</Text>
                                <View style={styles.checkIcon}>
                                    <AntDesign
                                        name='check'
                                        type='font-awesome'
                                        color='#000'
                                        size={26}
                                        containerStyle={{ width: width(10) }} />
                                </View>
                            </TouchableOpacity>
                        <View style={styles.border}></View>
                            <TouchableOpacity style = {styles.text}>
                                <Text style = {styles.categoryName}>Television</Text>
                                <View style={styles.checkIcon}>
                                    <AntDesign
                                        name='check'
                                        type='font-awesome'
                                        color='#00cb9c'
                                        size={26}
                                        containerStyle={{ width: width(10) }} />
                                </View>
                            </TouchableOpacity>
                        <View style={styles.border}></View>
                            <TouchableOpacity style = {styles.text}>
                                <Text style = {styles.categoryName}>Television</Text>
                                <View style={styles.checkIcon}>
                                    <AntDesign
                                        name='check'
                                        type='font-awesome'
                                        color='#00cb9c'
                                        size={26}
                                        containerStyle={{ width: width(10) }} />
                                </View>
                            </TouchableOpacity>
                        <View style={styles.border}></View>
                        </View>

                        <View style={styles.buttom}>
                            <Text style={styles.skip}>Back</Text>
                            <View style={styles.dotView}>
                                <View style={styles.dot}></View>
                                <View style={styles.dot}></View>
                                <View style={styles.dot}></View>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('tab2')}
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
    categoryName:{
        marginTop: wp('5%'),
        
    },
    text:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrow: {
        alignSelf: 'center',

    },
    checkIcon: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginTop: 15
    },
    border: {
        borderBottomColor: '#e8e8e9',
        borderBottomWidth: 2,
        marginHorizontal: wp('0%'),
        marginVertical: hp('2%')
    },
    main: {
        marginHorizontal: wp('5%'),
    },
    Picker: {
        borderColor: '#00cb9c',
        borderWidth: 2,
        marginHorizontal: wp('5%'),
        marginTop: wp('5%'),

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
        marginTop: hp('40%')
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
        marginBottom: wp('3%'),
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