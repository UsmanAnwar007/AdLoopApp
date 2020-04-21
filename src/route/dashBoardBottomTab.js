import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import home from './../component/home';
import chat from './../component/chat';
import account from './../component/account';
import myOffer from './../component/myOffer';

const TabScreens = createMaterialBottomTabNavigator({
    home:{
        screen: home,
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
    order: ['home', 'chat', 'myOffer', 'account'],
    initialRouteName: 'home',
    activeColor: '#00cb9c',
    
    inactiveColor: '#5f5d70',
    barStyle: { backgroundColor: '#fdffff' },
  },);

export default (TabScreens);