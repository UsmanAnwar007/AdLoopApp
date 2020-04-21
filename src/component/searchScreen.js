import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { value: 0, label: 'Offer' },
    { value: 1, label: 'Retailer' },
];
export default class searchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ backgroundColor: '#f4f4f8', height: hp('20%') }}>
                    <View style={{ marginTop: hp('3%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginRight: wp('2%') }}>
                            <AntDesign name='arrowleft' color='#5f5d70' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('home')
                                } />
                        </View>
                        <View style={{ marginTop: hp('0.5%'), }}>
                            <Text style={{ fontSize: 15, color: '#666666' }}>Search for Retailer or Prodect</Text>
                        </View>
                        <View style={{ marginTop: 0, marginLeft: wp('18%') }}>
                            <FontAwesome name='microphone' color='#5f5d70' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                    </View>
                    <View style={styles.mainRadioView}>
                        <View style={styles.radioButton}>
                            <RadioForm
                                radio_props={radio_props}
                                style={{ marginTop: 0, }}
                                initial={0}

                                radioStyle={{ padding: 3, marginRight: 50 }}
                                buttonColor={'#666666'}
                                buttonSize={10}
                                selectedButtonColor={'#00cb9c'}
                                formHorizontal={true}
                                //buttonOuterSize={10}
                                onPress={(value) => { this.setState({ value: value }) }}
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.recent}>RECENT SEARCH</Text>
                    <View style={styles.refresh}>
                        <MaterialCommunityIcons name='restore-clock' color='#666666' size={24}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                        <Text style={styles.ago}>Computer</Text>
                    </View>
                    <View style={styles.refresh}>
                        <MaterialCommunityIcons name='restore-clock' color='#666666' size={24}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                        <Text style={styles.ago}>Jeans</Text>
                    </View>
                    <View style={styles.refresh}>
                        <MaterialCommunityIcons name='restore-clock' color='#666666' size={24}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                        <Text style={styles.ago}>Watch</Text>
                    </View>
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
    radioButton: {
        marginRight: 30,
        marginTop: 10
    },
    mainRadioView: {
        marginLeft: wp('15%'),
        marginTop: hp('3%')
    },
    recent: {
        color: '#666666',
        fontSize: 15,
        marginHorizontal: wp('5%'),
        marginVertical: hp('2%')
    },
    refresh: {
        flexDirection: 'row',
        marginLeft: wp('7%'),
        marginBottom: hp('3')
    },
    ago:{
        marginLeft: wp('2%'),
        marginTop: wp('1%'),
        fontSize: 15,
        color: '#666666'
    }
});