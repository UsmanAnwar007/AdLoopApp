import React from 'react';
import { StyleSheet, Text, TextInput, View, Image,FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, AsyncStorage} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import axios from 'axios';

export default class subcategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            responseData: [],
            responseDataPosts: [],
            CatId:'',
            CatName:'',
            DummySubCat: [
                { id: 1, img: "https://img.youtube.com/vi/74sMio3c8Xo/mqdefault.jpg", name: 'calendar', },
                { id: 2, img: "https://img.youtube.com/vi/74sMio3c8Xo/mqdefault.jpg", name: 'calendar', },
                { id: 3, img: "https://img.youtube.com/vi/74sMio3c8Xo/mqdefault.jpg", name: 'calendar', },
            ],
            UMOBILE:'',
            SubCatId:'',
            UID:'',
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

    getData(){
        let SUBCATID = this.props.navigation.getParam('Catid');
        fetch(`http://aajo.in/public/api/subcategoryoffers/${SUBCATID}`)
        .then((response) => response.json())
        .then((responseJsonPosts) => {
            console.log(responseJsonPosts)
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
        this.setState({
            CatId: this.props.navigation.getParam('Catid'),
            CatName: this.props.navigation.getParam('Catname'),
            UID: this.props.navigation.getParam('UserID'),
        });
        this.getData();
      }


    _renderRowDeals = ({ item, }) => {
        //console.log(item.image)
        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('offerDetail', {POSTID: item.id, Uid: this.state.UID, UMobile: item.mobilenumber})}>
            <View style={styles.adsView1}>
                <Image source={{uri:'http://aajo.in/public/assets/offers/thumb/'+item.image}} style={{ width: wp('41%'), height: hp('25%'), marginTop: hp('-1.2%') }} />
                <Text style={styles.offer}>{item.name}</Text>
                <Text style={{marginTop:wp('1%'), paddingLeft:5}}>Expire at</Text>
                <Text style={styles.top}>{item.expiration}</Text>
            </View>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%'), }}>
                    <Text style={{ fontSize: 20, marginLeft: wp('2%'), marginBottom:wp('3%'), fontWeight: 'bold', color: '#5f5d70', alignSelf:'center', }}>{`${this.state.CatName}`.toUpperCase()}</Text>
                </View>
           

                <ScrollView>
    
                    <View style={styles.mainAdsView}>
                    <FlatList
                        data={this.state.responseDataPosts}
                        renderItem={this._renderRowDeals}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                    </View>

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
    inputContainer: {
        width: wp('90%'),
        height: hp('8%'),
        borderRadius: 3,
        marginTop: hp('2%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#f4f4f8',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInput: {
        fontSize: 15,
        width: wp('95%'),
        marginRight: wp('-35%')
    },
    mainCategory: {
        marginTop: hp('3%'),
        marginLeft: wp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    innerCategoryView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: wp('26%')
    },
    imageCategory: {
        width: wp('12%'),
        height: hp('6%'),
    },
    categoryText: {
        color: '#666666',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: hp('1%')
    },
    mainAdsView: {
        flexDirection: 'row',
        marginTop: hp('1%')
    },
    adsView: {
        backgroundColor: '#fff',
        borderColor: '#ededee',
        borderWidth: 2,
        borderRadius: 3,
        paddingHorizontal: wp('1%'),
        marginLeft: wp('5%'),
        marginRight: wp('1%'),
        paddingTop: wp('1%')
    },
    adsView1: {
        paddingHorizontal: wp('1%'),
        paddingTop: wp('1%'),
        backgroundColor: '#fff',
        borderColor: '#ededee',
        borderWidth: 2,
        borderRadius: 3,
        marginLeft:wp('3%'),
        marginBottom:wp('3%'),
    },
    offer: {
        fontSize: 20,
        color: '#5f5d70',
        marginTop: hp('2%'),
        paddingLeft:5
    },
    top: {
        fontSize: 15,
        color: '#666666',
        marginTop: hp('0%'),
        marginBottom: hp('2%'),
        paddingLeft:5
    },
    allOffers: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00cb9c',
        marginBottom: hp('5%'),
        marginTop: hp('5%'),
    }
});