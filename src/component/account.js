import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
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
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ marginTop: hp('4%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                    <View style={{ marginTop: 0, }}>
                        <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#5f5d70' }}>Select Categories</Text>
                    </View>
                    <View style={{ marginTop: 0, }}>
                        <Text style={{ fontSize: 20, marginLeft: 80, fontWeight: 'bold', color: '#00cb9c' }}>Next</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <AntDesign name='arrowright' color='#00cb9c' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                </View>
                <Text style={styles.headerText}>Please select categories you want to see ads from</Text>
                <ScrollView>
                   
                    
                </ScrollView>
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
        fontSize: 15,
        color: '#666666'
    },
    checkIcon: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginTop: 15
    },
});