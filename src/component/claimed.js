import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity,AsyncStorage, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class claimed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            USERID: null,
            responseDataPosts: [],
        };
    }

    getData = async () =>{
        const value = await AsyncStorage.getItem('ID');
        fetch(`http://aajo.in/public/api/claimoffers/${value}`)
        .then((response) => response.json())
        .then((responseJsonPosts) => {
            // console.log(responseJsonPosts)
            // console.log(responseJsonPosts.code)
            this.setState({
                responseDataPosts: responseJsonPosts
            })
        })
        .catch((error) => {
            Alert.alert(error)
        })
    }
    
    componentDidMount() {
        this.getData();
      }

      _renderRowDeals = ({ item, }) => {
        return (
            <View>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('offerDetail', {POSTID: item.id, Uid: this.state.UID, UMobile: this.state.UMOBILE})}
            style={styles.adsView}>
            <Image source={{uri:'http://aajo.in/public/assets/offers/thumb/'+item.image}} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
            <View style={styles.mainText}>
                <View style={styles.activeView}>
                    <View><Text style={styles.offer}>{item.name}</Text></View>
                    <View><Text style={styles.inactive}>Inactive</Text></View>
                </View>
                <View>
                <Text style={styles.top1} numberOfLines={3}>{item.description}</Text>
                </View>
                
                <View style={styles.dateView}>
                    <View><Text style={styles.top}>By Seven top retailer</Text></View>
                    <View><Text style={styles.top}>22 Jun</Text></View>
                </View>
            </View>
        </TouchableOpacity>
        <View style = {styles.codeView}>
            <Text style = {styles.codeText}>Code: {item.code}</Text>
        </View>
        </View>

        )
    }
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.mainAdsView}>
                <FlatList
                    data={this.state.responseDataPosts}
                    renderItem={this._renderRowDeals}
                    keyExtractor={item => item.id}
                />
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f9',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    mainAdsView: {
        marginTop: hp('3%')
    },
    adsView: {
        backgroundColor: '#fff',
        borderColor: '#ededee',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 3,
        paddingHorizontal: wp('1%'),
        marginHorizontal: wp('3%'),
        paddingTop: wp('3%'),
        
    },
    activeView: {
        flexDirection: 'row',
    },
    active: {
        color: '#00cb9c',
        borderColor: '#00cb9c',
        borderWidth: 1,
        padding: wp('1%'),
        borderRadius: wp('5%'),
        marginTop: hp('2%'),
        marginLeft: wp('12%')
    },
    inactive: {
        color: '#fd7181',
        borderColor: '#fd7181',
        borderWidth: 1,
        padding: wp('1%'),
        borderRadius: wp('5%'),
        marginTop: hp('2%'),
        marginLeft: wp('12%')
    },
    offer: {
        fontSize: 20,
        color: '#5f5d70',
        marginTop: hp('2%')
    },
    top1: {
        fontSize: 15,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    top: {
        fontSize: 12,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    mainText: {
        marginLeft: wp('3%')
    },
    dateView:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    codeView:{
        backgroundColor: '#00cb9c',
        marginHorizontal: wp('9%'),
        height: hp('6%'),
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: hp('3%')
    },
    codeText:{
        alignSelf: 'center',
        color:'#fff',
        marginTop: hp('1%'),
        fontSize: 15
    }
});