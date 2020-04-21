import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class offerDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: '',
            IDPOST: '',
            postImg: '',
            postTitle: '',
            postDescription: '',
            postRetailer: '',
            postExpire: '',
            UID:'',
            toggle:true,
            textValue:'CLAIMD OFFER',
            fav:null,
            UMOBILE: '',
        };
    }

    dialCall(){
        
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${this.state.UMOBILE}`;
    }
    else {
      phoneNumber = `telprompt:${this.state.UMOBILE}`;
    }
 
    Linking.openURL(phoneNumber);
      
    };

    getData(){
        let IDPOST = this.props.navigation.getParam('POSTID');
        fetch(`http://aajo.in/public/api/categoryofferdetail/${IDPOST}`)
        .then((response) => response.json())
        .then((responseJsonPosts) => {
            // console.log(responseJsonPosts)
            // console.log(responseJsonPosts.list[0].mobilenumber)
            this.setState({
                postTitle: responseJsonPosts.list[0].offertitle,
                postDescription: responseJsonPosts.list[0].description,
                postExpire: responseJsonPosts.list[0].expiration,
                postRetailer: responseJsonPosts.list[0].retailername,
                postImg: responseJsonPosts.list[0].image,

            })
        })
        .catch((error) => {
            Alert.alert(error)
        })
    }
    
    componentDidMount() {
        this.setState({
            postID: this.props.navigation.getParam('POSTID'),
            UID: this.props.navigation.getParam('Uid'),
            fav: require('./../image/fav.png'),
            UMOBILE: this.props.navigation.getParam('UMobile'),
        });
        this.getData();
      }

      Fav(){
        const {fav} = this.state;
        const {postID} = this.state;
        const {UID} = this.state;

        fetch('http://aajo.in/public/api/addfavourite  ', {

            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                offer_id: postID,
                user_id: UID,
            })
        }).then((response) => response.json())
        .then((responseJson) =>{
            if(responseJson == 'true'){
                this.setState({
                    fav:require('./../image/favfill.png'),
                })
            }
        })
        .catch((error) => {
            alert(error);
        });
        
    }

    claimd(){

        const {textValue} = this.state;
        const {postID} = this.state;
        const {UID} = this.state;

        fetch('http://aajo.in/public/api/addclaim', {

            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                offer_id: postID,
                user_id: UID,
            })
        }).then((response) => response.json())
        .then((responseJson) =>{
            if(responseJson == 'true'){
                this.setState({
                    textValue:'CLAIMD'
                })
            }
        })
        .catch((error) => {
            alert(error);
        });
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ marginTop: hp('3%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack(null)}>
                    <View style={{ marginLeft: wp('0%') }}>
                        <AntDesign name='arrowleft' color='#5f5d70' size={26}/>
                    </View>
                    </TouchableOpacity>
                    <View style={{ marginLeft: wp('62%') }}>
                        <Entypo name='share' color='#5f5d70' size={26}
                            onPress={
                                () => this.props.navigation.navigate('#')
                            } />
                    </View>
                    {/* onPress={
                                () => this.props.navigation.navigate('saveOffer')
                            }  */}
                    <TouchableOpacity onPress={() => this.Fav()}>
                    <View style={{ marginTop: 0, marginLeft: wp('4%') }}>
                        {/* <FontAwesome name='heart' color='#5f5d70' size={26}
                    /> */}
                    <Image style={{width:27, height:27}} source={this.state.fav} />
                    </View>
                    </TouchableOpacity>

                </View>
                <ScrollView>
                    <Image source={{uri:'http://aajo.in/public/assets/offers/thumb/'+this.state.postImg}} style={{ width: wp('110.5%'), marginLeft: wp('-5%'), height: hp('35%'), marginTop: hp('3%') }} />
                    <View style={styles.mainView}>
                        <View style={styles.offer}>
                            <Text style={styles.offerText}>{this.state.postTitle}</Text>
                            {/* <Text>21 Jan</Text> */}
                        </View>
                        <Text style={styles.lorem}>{this.state.postDescription}</Text>
                        {/* <Text style={styles.readMore}>READ MORE</Text> */}
                        <View style={{flex:1, flexDirection:'row'}}>
                        <Text style={styles.expire}>Offer expires in: </Text>
                        <Text style={styles.expire}>{this.state.postExpire}</Text>
                        </View>
                        <View style={styles.border}></View>
                        {/* <Text style={styles.recent}>RECENT PEOPLE</Text> */}
                        <View style={styles.profile}>
                            <Image source={require('./../image/user1.png')} style={{ width: wp('12.5%'), height: hp('7%'), marginRight: wp('3%'), marginTop: wp('3%'), }} />
                            <View>
                                <Text style={styles.profileText}>{this.state.postRetailer}</Text>
                                {/* <Text style={styles.profileTime}>Retailer since 2018</Text> */}
                            </View>
                        </View>
                        {/* <View style={styles.dotView}>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View>
                            <Text style={styles.rating}>4/5</Text>
                        </View> */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('offerProfile')}>
                        <View style={styles.allView}>
                            <Text style={styles.allViewText}>VIEW PROFILE</Text>
                            <View style={{ marginLeft: 10 }}>
                                <AntDesign name='arrowright' color='#00cb9c' size={22} />
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.border}></View>
                    </View>


                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.claimd()}>
                        <Text style={styles.buttonText}>{this.state.textValue}</Text>
                    </TouchableOpacity>

                    

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.buttomBotton}>
                            <View style={styles.arrow}>
                                <MaterialIcons name='chat-bubble' color='#fff' size={22}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                            </View>
                            <TouchableOpacity
                                style={styles.chatButton}
                                onPress={() => this.props.navigation.navigate('#')}>
                                <Text style={styles.chatButtonText}>CHAT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttomBotton}>
                            <View style={styles.arrow}>
                                <Ionicons name='ios-call' color='#fff' size={22}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                            </View>
                            <TouchableOpacity
                                style={styles.chatButton}
                                onPress={() => this.dialCall()}>
                                <Text style={styles.chatButtonText}>CALL</Text>
                            </TouchableOpacity>
                        </View>
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
    headerText: {
        marginLeft: wp('3%'),
        marginTop: hp('0%'),
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#5f5d70'
    },
    offer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: wp('5%'),
    },
    offerText: {
        fontSize: 18,
        color: '#5f5d70'
    },
    date: {
        fontSize: 15,
        color: '#666666'
    },
    mainView: {
        marginHorizontal: wp('5%'),

    },
    lorem: {
        color: '#666666',
        fontSize: 12
    },
    readMore: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00cb9c',
        marginTop: wp('2%'),
        marginBottom: wp('2%'),
    },
    expire: {
        fontSize: 12,
        color: '#5f5d70',
        marginTop:wp('2%')
    },
    border: {
        borderBottomColor: '#e8e8e9',
        borderBottomWidth: 2,
        marginHorizontal: wp('0%'),
        marginVertical: hp('2%')
    },
    recent: {
        fontSize: 15,
        color: '#666666'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: wp('1%'),
    },
    profileText: {
        fontSize: 20
    },
    profileTime: {
        fontSize: 11
    },
    dotView: {
        flexDirection: 'row',
        marginLeft: wp('16%'),
        marginTop: wp('1%'),

    },
    dot: {
        backgroundColor: '#00cb9c',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: wp('1%'),
    },
    rating: {
        marginLeft: wp('3%'),
        color: '#666666',
        marginTop: wp('-1.5%'),

    },
    allView: {
        marginTop: hp('0%'),
        flexDirection: 'row'
    },
    allViewText: {
        fontSize: 15,
        marginLeft: wp('16%'),
        fontWeight: 'bold',
        color: '#00cb9c'
    },
    button: {
        marginTop: hp('2%'),
        marginBottom: hp('5%'),
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
    chatButton: {
        alignItems: 'center',
    },
    chatButtonText: {
        fontSize: 22,
        color: '#fff',
        marginTop: hp('2%'),
        marginLeft: wp('2%'),

    },
    buttomBotton: {
        flexDirection: 'row',
        marginTop: hp('2%'),
        height: hp('8%'),
        width: wp('51%'),
        backgroundColor: '#00cb9c',
        borderEndWidth: 2,
        borderEndColor: '#fff'
    },
    arrow:{
        justifyContent: 'center',
        marginLeft: wp('12%'),
        marginTop: wp('1%'),

    }
});