import SafeAreaView from 'react-native-safe-area-context';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation';
import OrderBuy from './../component/OrderBuy';
import OrderSell from './../component/OrderSell';
import USDWallet from '../component/USDWallet';
import BTCWallet from '../component/BTCWallet';
import LTCWallet from '../component/LTCWallet';
import ETHWallet from '../component/ETHWallet';
import SideMenu from './../route/SideMenu';

const DashBoard = createDrawerNavigator({
  OrderBuy: {
    screen: OrderBuy,
    navigationOptions: {
        header: null,
    },
},
  OrderSell: {
    screen: OrderSell,
    navigationOptions: {
        header: null,
    },
},
  USDWallet: {
    screen: USDWallet,
    navigationOptions: {
        header: null,
    },
},
  BTCWallet: {
    screen: BTCWallet,
    navigationOptions: {
        header: null,
    },
},

  }, {
    drawerWidth: 300,
    initialRouteName:'Home',
    contentComponent: SideMenu,
  });
  

export default (DashBoard);

