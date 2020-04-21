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
export default class home2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: ''
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign
                name='home'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ backgroundColor: '#fff', height: '10%' }}>
                    <View style={{ marginTop: hp('3%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginLeft: wp('0%') }}>
                            <Ionicons name='ios-notifications' color='#5f5d70' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                        <View style={{ marginLeft: wp('60%') }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5f5d70' }}>Wallet</Text>
                        </View>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: wp('2%'), fontWeight: 'bold', color: '#00cb9c' }}>$29</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.mainView}>
                        <Text style={styles.text}>DashBoard</Text>
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

                    </View>
                    <View style={styles.mainBox}>
                        <View style={styles.box}>
                            <Text style={styles.offer}>Offer View</Text>
                            <Text style={styles.number}>07</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.offer}>Active Offer</Text>
                            <Text style={styles.number}>07</Text>

                        </View>
                    </View>
                    <View style={styles.mainBox}>
                        <View style={styles.box}>
                            <Text style={styles.offer}>Cloupons Redeemed</Text>
                            <Text style={styles.number}>02</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.offer}>Shoppers</Text>
                            <Text style={styles.number}>05</Text>

                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('createOffer')}>
                        <Text style={styles.buttonText}>Create Offer</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    Picker: {
        width: wp('30%'),
        marginLeft: wp('40%'),

    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        marginTop: wp('2%'),
        marginBottom: wp('5%'),

    },
    text: {
        fontSize: 18,
        marginTop: wp('5%'),
        fontWeight: 'bold'
    },
    mainBox: {
        flexDirection: 'row',
        marginHorizontal: wp('6%'),

    },
    box: {
        backgroundColor: '#fff',
        width: wp('40%'),
        height: hp('20%'),
        marginRight: wp('7%'),
        marginBottom: wp('7%'),
    },
    offer: {
        marginHorizontal: wp('5%'),
        marginVertical: hp('3%'),
        color: '#666666',
        fontSize: 12
    },
    number: {
        marginHorizontal: wp('5%'),
        color: '#5f5d70',
        fontSize: 20,
        fontWeight: 'bold'
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
});