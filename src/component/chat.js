import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import All_Tab from './allChat';
import UnRead_Tab from './unReadChat';
import Important_Tab from './importantChat';

export default class chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            all: true,
            unRead: false,
            important: false
        };
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons
                name='ios-time'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }
    ScreenView() {
        if (this.state.all) {
            return (
                <All_Tab navigation={this.props.navigation} />
            )
        }
        else if (this.state.unRead) {
            return (
                <UnRead_Tab navigation={this.props.navigation} />
            )
        }
        else {
            return (
                <Important_Tab navigation={this.props.navigation} />
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <Text style = {styles.headerText}>Chat</Text>
                    </View>
                    <View style={{ marginLeft: wp('56%') }}>
                        <MaterialIcons name='edit' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                    <View style={{ marginTop: 0,marginLeft: wp('4%') }}>
                    <AntDesign name='search1' color='#5f5d70' size={26}
                    onPress={
                        () => this.props.navigation.navigate('#')
                    } />
                    </View>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: hp('3%'), }}>
                    <TouchableOpacity
                        onPress={() => this.setState({ all: true, unRead: false, important: false })}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                width: wp('25%'),
                                borderBottomColor: this.state.all? '#00cb9c': '#fff',
                                borderBottomWidth: this.state.all? 4 : 0,
                                
                            }}>
                            <Text style={{
                                color: this.state.all? '#00cb9c': '#666666',
                                fontSize: 15
                            }}>ALL</Text>
                                    
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.setState({ all: false, unRead: true, important: false})}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                width: wp('25%'),
                                borderBottomColor: this.state.unRead? '#00cb9c': '#fff',
                                borderBottomWidth: this.state.unRead? 4 : 0,
                                
                            }}>
                            <Text style={{
                                color: this.state.unRead? '#00cb9c': '#666666',
                                fontSize: 15
                            }}>UNREAD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.setState({ all: false, unRead: false, important: true})}
                            style={{
                                padding: 15,
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                width: wp('33%'),
                                borderBottomColor: this.state.important? '#00cb9c': '#fff',
                                borderBottomWidth: this.state.important? 4 : 0,
                                
                            }}>
                            <Text style={{
                                color: this.state.important? '#00cb9c': '#666666',
                                fontSize: 15
                            }}>IMPORTANT</Text>
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
        marginLeft: wp('3%'),
        marginTop: hp('0%'),
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#5f5d70'
    },
});