import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, Feather, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';


export default class allChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatData: [
                { key: 1, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 2, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 3, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 4, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 5, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 6, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 7, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 8, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 9, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 10, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
                { key: 11, img1: require('./../image/ads3.png'), img2: require('./../image/user1.png'), textFree: 'But 1 Get 1 free', textBy: 'By Seven top retailer', iconBook: 'bookmark', iconRestore: 'restore-clock', textAgo: '5 days ago' },
            ]
        };
    }

    render(){
        const swipeSetting = {

            autoClose: true,
            onClose:(secId, rowId, direction) =>{

            },
            onOpen:(secId, rowId, direction) =>{

            },
            right:[
                {
                    onPress: () =>{

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index
        }
    }

    renderRow = ({ item }) => {
        return (
                <View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('chatDetail') }} style={styles.mainView}>
                        <View style={styles.mainChatView}>
                            <Image source={item.img1} style={{ width: wp('15%'), height: hp('9%'), }} />
                            <Image source={item.img2} style={{ width: wp('7.2%'), height: hp('4%'), borderColor: '#fff', borderWidth: 2, borderRadius: wp('6%'), position: 'absolute', marginLeft: wp('10%'), marginTop: hp('6%') }} />
                        </View>
                        <View style={styles.dateView}>
                            <View><Text style={styles.top}>{item.textFree}</Text></View>
                            <View><Text style={styles.date}>{item.textBy}</Text></View>
                        </View>
                        <View style={styles.BookView}>
                            <View style={styles.bookmark}>
                                <Feather name={item.iconBook} color='#5f5d70' size={20} />
                            </View>
                            <View style={styles.refresh}>
                                <MaterialCommunityIcons name={item.iconRestore} color='#5f5d70' size={18}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                                <Text style={styles.ago}>{item.textAgo}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.border}></View>
                </View>
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={this.state.chatData}
                        renderItem={this.renderRow}
                        keyExtractor={(item, index) => index.toString()}
                    />

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
    mainView: {
        flexDirection: 'row',
        marginVertical: hp('2%'),

    },
    mainChatView: {
        marginHorizontal: hp('3%'),
    },
    dateView: {
    },
    top: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666666',
        marginBottom: hp('1%'),
    },
    date: {
        fontSize: 12,
        color: '#666666',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
    },
    BookView: {
        marginLeft: wp('12%')
    },
    refresh: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    bookmark: {
        alignSelf: 'flex-end',
        marginBottom: hp('2%'),
        marginTop: hp('1%'),
    },
    ago: {
        fontSize: 11,
        marginLeft: wp('3%'),
        marginTop: hp('0.5%')
    },
    border: {
        borderBottomColor: '#e8e8e9',
        borderBottomWidth: 2,
        marginHorizontal: wp('7%'),
        marginVertical: hp('0%')
    }
});