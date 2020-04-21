import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import home2 from './../component/home2';
import chat from './../component/chat';
import account from './../component/account';
import myOffer from './../component/myOffer';

const TabScreens = createMaterialBottomTabNavigator({
    home2:{
        screen: home2,
        navigationOptions:  {
            title:'HOME',
        }
    },
    chat:{
        screen: chat,
        navigationOptions:  {
            title:'CHAT',
        }
    },
    account:{
        screen: account,
        navigationOptions:  {
            title:'ACCOUNT',
        }
    },
    myOffer:{
        screen: myOffer,
        navigationOptions:  {
            title:'MY OFFERS',
        }
    },
}, {
    order: ['home2', 'chat', 'myOffer', 'account'],
    initialRouteName: 'home2',
    activeColor: '#00cb9c',
    
    inactiveColor: '#9e9e9e',
    barStyle: { backgroundColor: '#fdffff' },
  },);

export default (TabScreens);