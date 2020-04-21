import React from 'react';
import { StyleSheet, Text, TextInput, View, Image,FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import axios from 'axios';

export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            responseData: [],
            responseDataPosts: [],
            CatId:'',
            UID: '',
            DummySubCat: [
                { id: 1, img: "https://img.youtube.com/vi/74sMio3c8Xo/mqdefault.jpg", name: 'calendar', },
                { id: 2, img: "https://img.youtube.com/vi/74sMio3c8Xo/mqdefault.jpg", name: 'calendar', },
                { id: 3, img: "https://img.youtube.com/vi/74sMio3c8Xo/mqdefault.jpg", name: 'calendar', },
            ],
            UMOBILE:'',
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

    getSubCategories(){
        fetch('http://aajo.in/public/api/subcategorylist/1')
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log(responseJson)
            this.setState({
                responseData: responseJson
            })
        })
        .catch((error) => {
            Alert.alert(error)
        })
    }

    getData(){
        fetch('http://aajo.in/public/api/categoryoffers/1')
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
        this.setState({
            CatId: this.props.navigation.getParam('CATID'),
            UID: this.props.navigation.getParam('Uid'),
            UMOBILE: this.props.navigation.getParam('UMobile'),
        });
        this.getSubCategories();
        this.getData();
      }

    _renderRow = ({ item, }) => {
        return (
            <View style={styles.mainCategory}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('subcategories', {Catid: item.id, Catname: item.category_name, UserID: this.state.UID })}
                    style={styles.innerCategoryView}>
                    <Image source={require('./../image/video2.png')}style={styles.imageCategory} />
                    <Text style={styles.categoryText}>{item.category_name}</Text>
                </TouchableOpacity>
            </View>

        )
    }

    _renderRowDeals = ({ item, }) => {
        //console.log(item.image)
        return (

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('offerDetail', {POSTID: item.id, Uid: this.state.UID, UMobile: this.state.UMOBILE})}>
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
                <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <Ionicons name='ios-notifications' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                    <View style={{ marginLeft: wp('63%') }}>
                        <MaterialIcons name='location-on' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                    <View style={{ marginTop: 0, }}>
                        <Text style={{ fontSize: 20, marginLeft: wp('2%'), fontWeight: 'bold', color: '#5f5d70' }}>India</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('searchScreen')}>
                        <AntDesign
                            // reverse
                            name='search1'
                            type='font-awesome'
                            color='#5f5d70'
                            size={22}
                            style={{ marginHorizontal: 20 }}
                        />
                    </TouchableOpacity>
                    <TextInput
                        numberOfLines={6}
                        placeholderTextColor='#666666'
                        style={styles.searchInput}
                        placeholder={'Find prodects or retailer'}
                        containerStyle={{ marginVertical: '5%' }}
                    />
                    <FontAwesome
                        // reverse
                        name='microphone'
                        type='font-awesome'
                        color='#5f5d70'
                        size={22}
                        style={{ marginHorizontal: 10 }}
                    />
                </View>

                <ScrollView>
                    <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#5f5d70' }}>Categories</Text>
                        </View>
                        <TouchableOpacity style={{flex:1, flexDirection:'row'}}>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 16, marginLeft: wp('32%'), marginTop:wp('1%'), fontWeight: 'bold', color: '#00cb9c' }}>SEE ALL</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop:wp('1%') }}>
                            <AntDesign name='arrowright' color='#00cb9c' size={21}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={this.state.responseData}
                        renderItem={this._renderRow}
                        keyExtractor={item => item.id}
                        numColumns={3}
                    />

                    <View style={{ marginTop: hp('5%'), marginBottom: hp('3%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#5f5d70' }}>Fresh & New Offers</Text>
                        </View>
                        <TouchableOpacity style={{flex:1, flexDirection:'row'}}>
                        <View style={{ marginTop: 0, }}>
                            <Text style={{ fontSize: 16, marginLeft: wp('8%'), marginTop: wp('1%'), fontWeight: 'bold', color: '#00cb9c' }}>VIEW ALL</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop:wp('1%') }}>
                            <AntDesign name='arrowright' color='#00cb9c' size={21}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mainAdsView}>
                    <FlatList
                        data={this.state.responseDataPosts}
                        renderItem={this._renderRowDeals}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                    </View>

                   
                    
                    <Text onPress={
                        () => this.props.navigation.navigate('allOfferListing')}
                        style={styles.allOffers}>VIEW ALL OFFERS</Text>
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