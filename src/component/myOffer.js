import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Claimed_Tab from './claimed';
import Redeemed_Tab from './redeemed';
import Favority_Tab from './favority';
export default class myOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            claimed: true,
            redeemed: false,
            favority: false
        };
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons
                name='location-on'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }
    ScreenView() {
        if (this.state.claimed) {
            return (
                <Claimed_Tab navigation={this.props.navigation} />
            )
        }
        else if (this.state.redeemed) {
            return (
                <Redeemed_Tab navigation={this.props.navigation} />
            )
        }
        else {
            return (
                <Favority_Tab navigation={this.props.navigation} />
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <Text style = {styles.headerText}>My Offers</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: hp('3%'), }}>
                    <TouchableOpacity
                        onPress={() => this.setState({ claimed: true, redeemed: false, favority: false })}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                width: wp('30%'),
                                borderBottomColor: this.state.claimed? '#00cb9c': '#fff',
                                borderBottomWidth: this.state.claimed? 4 : 0,
                                
                            }}>
                            <Text style={{
                                color: this.state.claimed? '#00cb9c': '#666666',
                                fontSize: 15
                            }}>CLAIMED</Text>
                                    
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.setState({ claimed: false, redeemed: true, favority: false})}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                width: wp('30%'),
                                borderBottomColor: this.state.redeemed? '#00cb9c': '#fff',
                                borderBottomWidth: this.state.redeemed? 4 : 0,
                                
                            }}>
                            <Text style={{
                                color: this.state.redeemed? '#00cb9c': '#666666',
                                fontSize: 15
                            }}>REDEEMED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.setState({ claimed: false, redeemed: false, favority: true})}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                width: wp('30%'),
                                borderBottomColor: this.state.favority? '#00cb9c': '#fff',
                                borderBottomWidth: this.state.favority? 4 : 0,
                                
                            }}>
                            <Text style={{
                                color: this.state.favority? '#00cb9c': '#666666',
                                fontSize: 15
                            }}>FAVORITE</Text>
                    </TouchableOpacity>
                </View>
                {this.ScreenView()}
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
        marginHorizontal: wp('5%'),
        marginTop: hp('2%'),
        fontSize: hp('5%'),
        color: '#5f5d70'
    },
});