import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, AsyncStorage, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple, Checkbox } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class selectCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBox1: false,
            checkBox2: false,
            checkBox3: false,
            checkBox4: false,
            checkBox5: false,
            checkBox6: false,
            CatName: '',
            CatImg: '',
            CatId: '',
            UID:'',
            UMOBILE:'',
            UUID:'',
        };
    }
    
    getData(){
        fetch('http://aajo.in/public/api/categorylist')
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log(responseJson)
            // console.log(responseJson.list[0].category_name)
            // console.log(responseJson.list[0].id)
            this.setState({
                CatId: responseJson.list[0].id,
                CatName: responseJson.list[0].category_name,
                CatImg: responseJson.list[0].image,
            })
        })
        .catch((error) => {
            Alert.alert(error)
        })
    }

   async componentDidMount(){
        this.getData();
        this.setState({
            UID: this.props.navigation.getParam('uid'),
            UMOBILE: this.props.navigation.getParam('umobile'),
        })

    } 
    onCheckBox1(){
        if(this.state.checkBox1){
            this.setState({checkBox1: false})
        }
        else{
            this.setState({checkBox1: true})
        }
    }
    onCheckBox2(){
        if(this.state.checkBox2){
            this.setState({checkBox2: false})
        }
        else{
            this.setState({checkBox2: true})
        }
    }
    onCheckBox3(){
        if(this.state.checkBox3){
            this.setState({checkBox3: false})
        }
        else{
            this.setState({checkBox3: true})
        }
    }
    onCheckBox4(){
        if(this.state.checkBox4){
            this.setState({checkBox4: false})
        }
        else{
            this.setState({checkBox4: true})
        }
    }
    onCheckBox5(){
        if(this.state.checkBox5){
            this.setState({checkBox5: false})
        }
        else{
            this.setState({checkBox5: true})
        }
    }
    onCheckBox6(){
        if(this.state.checkBox6){
            this.setState({checkBox6: false})
        }
        else{
            this.setState({checkBox6: true})
        }
    }
    nextCheck(){
        if(this.state.checkBox1 == true){
            this.props.navigation.navigate('tab', {CATID: this.state.CatId, Uid: this.state.UID, UMobile: this.state.UMOBILE});
        }
        if(this.state.checkBox1 == false){
            alert("Please Select Catagory");
        }
        // this.props.navigation.navigate('tab');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ marginTop: hp('4%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                    <View style={{ marginTop: 0, }}>
                        <Text style={{ fontSize: 20, marginLeft: 0, fontWeight: 'bold', color: '#5f5d70' }}>Select Categories</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.nextCheck()} style={{flex:1, flexDirection:'row'}}>
                    <View style={{ marginTop: 0, }}>
                        <Text style={{ fontSize: 20, marginLeft: 80, fontWeight: 'bold', color: '#00cb9c' }}>Next</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <AntDesign name='arrowright' color='#00cb9c' size={26}
                             />
                    </View>
                    </TouchableOpacity>
                    
                </View>
                <Text style={styles.headerText}>Please select categories you want to see ads from</Text>
                <View style={{ marginTop: 40 }}>
            </View>
                <ScrollView>
                    <View style = {{flexDirection: 'row', marginTop: hp('10%'),  borderTopWidth: 2, borderTopColor: '#ccc'}}>
                        <TouchableOpacity onPress={() =>  this.onCheckBox1()}
                            style={{
                                width: WIDTH - wp('50%'),
                                height: hp('25%'),
                                backgroundColor: this.state.checkBox1? '#00cb9c': '#fff',
                            }}>
                            <View style={styles.checkIcon}>
                                <AntDesign
                                    name='check'
                                    type='font-awesome'
                                    color='#fff'
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Image source={require('./../image/video1.png')}
                                style={{
                                    width: wp('15%'),
                                    height: hp('10%'),
                                    alignSelf: 'center',
                                    tintColor: this.state.checkBox1? '#fff': '#00cb9c'
                                }} />
                            <Text style={{
                                color: this.state.checkBox1? '#fff': '#666666',
                                fontSize: 15,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>{this.state.CatName}</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={() =>  this.onCheckBox2()}
                            style={{
                                width: WIDTH - wp('50%'),
                                backgroundColor: this.state.checkBox2? '#00cb9c': '#fff',
                                height: hp('25%'),
                            }}>
                            <View style={styles.checkIcon}>
                                <AntDesign
                                    name='check'
                                    type='font-awesome'
                                    color='#fff'
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Image source={require('./../image/video1.png')}
                                style={{
                                    width: wp('15%'),
                                    height: hp('10%'),
                                    alignSelf: 'center',
                                    tintColor:  this.state.checkBox2? '#fff': '#00cb9c'
                                }} />
                            <Text style={{
                                color: this.state.checkBox2? '#fff': '#666666',
                                fontSize: 15,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>HOME & TEXTILE</Text>
                        </TouchableOpacity> */}
                    </View>

                    {/* <View style = {{flexDirection: 'row', marginTop: hp('0%'), }}>
                        <TouchableOpacity onPress={() =>  this.onCheckBox3()}
                            style={{
                                width: WIDTH - wp('50%'),
                                height: hp('25%'),
                                backgroundColor:  this.state.checkBox3? '#00cb9c': '#fff',
                            }}>
                            <View style={styles.checkIcon}>
                                <AntDesign
                                    name='check'
                                    type='font-awesome'
                                    color='#fff'
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Image source={require('./../image/video1.png')}
                                style={{
                                    width: wp('15%'),
                                    height: hp('10%'),
                                    alignSelf: 'center',
                                    tintColor: this.state.checkBox3? '#fff': '#00cb9c'
                                }} />
                            <Text style={{
                                color: this.state.checkBox3? '#fff': '#666666',
                                fontSize: 15,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>PERSONAL CARE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() =>  this.onCheckBox4()}
                            style={{
                                width: WIDTH - wp('50%'),
                                backgroundColor: this.state.checkBox4? '#00cb9c': '#fff',
                                height: hp('25%'),
                            }}>
                            <View style={styles.checkIcon}>
                                <AntDesign
                                    name='check'
                                    type='font-awesome'
                                    color='#fff'
                                    size={26}
                                    containerStyle={{ width: width(10) }} />
                            </View>
                            <Image source={require('./../image/video1.png')}
                                style={{
                                    width: wp('15%'),
                                    height: hp('10%'),
                                    alignSelf: 'center',
                                    tintColor:  this.state.checkBox4? '#fff': '#00cb9c'
                                }} />
                            <Text style={{
                                color: this.state.checkBox4? '#fff': '#666666',
                                fontSize: 15,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>INDEPENDENT GROCER</Text>
                        </TouchableOpacity>
                    </View> */}

                    {/* <View style = {{flexDirection: 'row', marginTop: hp('0%'),  borderBottomWidth: 2, borderBottomColor: '#ccc', marginBottom: hp('10%')}}>
                    <TouchableOpacity onPress={() =>  this.onCheckBox5()}
                        style={{
                            width: WIDTH - wp('50%'),
                            height: hp('25%'),
                            backgroundColor: this.state.checkBox5? '#00cb9c': '#fff',
                        }}>
                        <View style={styles.checkIcon}>
                            <AntDesign
                                name='check'
                                type='font-awesome'
                                color='#fff'
                                size={26}
                                containerStyle={{ width: width(10) }} />
                        </View>
                        <Image source={require('./../image/video1.png')}
                            style={{
                                width: wp('15%'),
                                height: hp('10%'),
                                alignSelf: 'center',
                                tintColor: this.state.checkBox5? '#fff': '#00cb9c'
                            }} />
                        <Text style={{
                            color: this.state.checkBox5? '#fff': '#666666',
                            fontSize: 15,
                            alignSelf: 'center',
                            marginTop: '10%'
                        }}>GIFT/BOOK STORE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>  this.onCheckBox6()}
                        style={{
                            width: WIDTH - wp('50%'),
                            backgroundColor: this.state.checkBox6? '#00cb9c': '#fff',
                            height: hp('25%'),
                        }}>
                        <View style={styles.checkIcon}>
                            <AntDesign
                                name='check'
                                type='font-awesome'
                                color='#fff'
                                size={26}
                                containerStyle={{ width: width(10) }} />
                        </View>
                        <Image source={require('./../image/video1.png')}
                            style={{
                                width: wp('15%'),
                                height: hp('10%'),
                                alignSelf: 'center',
                                tintColor:  this.state.checkBox6? '#fff': '#00cb9c'
                            }} />
                        <Text style={{
                            color: this.state.checkBox6? '#fff': '#666666',
                            fontSize: 15,
                            alignSelf: 'center',
                            marginTop: '10%'
                        }}>PET SUPPLY STORE</Text>
                    </TouchableOpacity>
                </View> */}
                    
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