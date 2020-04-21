import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
export default class getStarted3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={styles.title}>
                    <Text style={styles.titleName}>Title of the page 3</Text>
                    <Text style={styles.lorem}>Lorem ipsum, or lipsum as it is sometimes{'\n'}      known, is dummy text used in laying{'\n'}                       out print, pesetter</Text>

                </View>
                <View style={styles.buttom}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('accountType')}>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
                    <View style={styles.dotView}>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot1}></View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('getStarted4')}
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
            </View>
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
    buttom: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        marginTop: wp('15%'),
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
        marginRight: wp('2%'),
    },
    dot1: {
        backgroundColor: '#f0f0f0',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: wp('2%'),
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
    title: {
        marginHorizontal: wp('10%'),
        marginTop: hp('50%'),
        alignItems: 'center'
    },
    titleName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5f5d70'
    },
    lorem: {
        color: '#666666',
        fontSize: 15,
        marginTop: wp('6%'),
        alignSelf: 'center'

    },

});