import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { Text,TouchableOpacity, View, Image} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class SideMenu extends Component {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <View style={{flex:1}}>
        <View style = {{flexDirection: 'row'}}>
          <View style={{height:height(30), justifyContent:'center', alignItems: 'center',}}>
              <Image source={require('./../image/user.png')} style={{width:width(20), height:width(20), marginLeft: 20}}></Image>
          </View>
          <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
            <Text style = {{fontSize: 13, alignSelf: 'flex-start', fontWeight: 'bold'}}>Alex Rowe</Text>
            <Text style = {{fontSize: 13}}>example@gmail.com</Text>
          </View>
        </View>
        <View style = {{flexDirection: 'row', marginLeft: 100, marginTop: '-20%'}}>
          <View style = {{marginRight: 10}}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Profile')}} style={{}}>
          <AntDesign
            name='user'
            type='font-awesome'
            color='#FFA726'
            size={25}
            containerStyle={{width:width(10)}}
          />
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Setting')}} style={{ }}>
          <AntDesign
            name='setting'
            type='font-awesome'
            color='#FFA726'
            size={25}
            containerStyle={{width:width(10)}}
          />
          </TouchableOpacity>
          </View>
        </View>
        <View style = {{marginBottom: 20, marginTop: 20, alignItems: 'center', height: 50, backgroundColor: '#263238', flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style = {{fontSize: 13, marginLeft: 15, color: '#FFA726' }}>Today Price </Text>
          </View>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Text style = {{fontWeight: 'bold', fontSize: 13, color: '#FFA726'}}>1 BTC</Text>
            <Text style = {{marginRight: 15, fontSize: 13, color: '#FFA726'}}> = $9600</Text>
          </View>
        </View>
          <ScrollView>
          <View style = {{borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30}}>
            <Text style = {{fontSize: 13, marginBottom: 15}}>WALLET ACCOUNT</Text>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}} style={{marginLeft: 5, flexDirection:'row', marginVertical: height(2),}}>
            <AntDesign
              name='home'
              type='font-awesome'
              color='#FFA726'
              size={24}
              containerStyle={{width:width(10)}}
            />
            <View style = {{marginLeft: 15, marginTop: 1, }}>
              <Text style={{ color:'black', fontSize: 13 }}>HOME</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BTCWallet')}} style={{flexDirection:'row', marginVertical: height(2),}}>
           
            <Image source = {require('./../image/Logo3.png')} style = {{width: 30, height: 30, alignSelf: 'flex-start'}}/>
            <View style = {{marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
              <Text style={{ color:'black', fontSize: 13 }}>BTC WALLET</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ETHWallet')}} style={{flexDirection:'row', marginVertical: height(2),}}>
           
            <Image source = {require('./../image/logo1.png')} style = {{width: 30, height: 30, alignSelf: 'flex-start'}}/>
            <View style = {{marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
              <Text style={{ color:'black', fontSize: 13 }}>ETH WALLET</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LTCWallet')}} style={{flexDirection:'row', marginVertical: height(2),}}>
            <Image source = {require('./../image/Logo4.png')} style = {{width: 30, height: 30, alignSelf: 'flex-start'}}/>
            
            <View style = {{marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
              <Text style={{ color:'black', fontSize: 13 }}>LTC WALLET</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('USDWallet')}} style={{flexDirection:'row', marginVertical: height(2),}}>
            <Image source = {require('./../image/Logo2.png')} style = {{width: 30, height: 30, alignSelf: 'flex-start'}}/>
            
            <View style = {{marginLeft: 15, marginTop: 1, justifyContent: 'center'}}>
              <Text style={{ color:'black', fontSize: 13 }}>USD WALLET</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30}}>
            <Text style = {{fontSize: 13, marginBottom: 15, marginTop: 15}}>ORDERS</Text>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('OrderBuy')}} style={{marginLeft: 5, flexDirection:'row', marginVertical: height(2),}}>
            <FontAwesome
              name='first-order'
              type='font-awesome'
              color='#FFA726'
              size={24}
              containerStyle={{width:width(10)}}
            />
            <View style = {{marginLeft: 15, marginTop: 1, }}>
              <Text style={{ color:'black', fontSize: 13 }}>BUY ORDERS</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('OrderSell')}} style={{marginLeft: 5, flexDirection:'row', marginVertical: height(2),}}>
            <FontAwesome
              name='first-order'
              type='font-awesome'
              color='#FFA726'
              size={24}
              containerStyle={{width:width(10)}}
            />
            <View style = {{marginLeft: 15, marginTop: 1, }}>
              <Text style={{ color:'black', fontSize: 13 }}>SELL ORDERS</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{width: 120, marginLeft: 30, marginTop: 40, marginBottom: 40 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignIn')}} style={{borderRadius: 5, backgroundColor: '#263238', marginVertical: height(2),}}>
            <View style = {{ height: 50,  }}>
              <Text style={{ fontWeight: 'bold', marginVertical: 10, alignSelf: 'center', fontSize: 20,  color: '#FFA726'}}>LOG OUT</Text>
            </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
      </View>
    );
  }
}


