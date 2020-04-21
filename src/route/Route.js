import SignInShoper from '../component/SignInShoper';
import SignUpShoper from '../component/SignUpShoper';
import SingInRetailer from '../component/SingInRetailer';
import SignUpRetailer from '../component/SignUpRetailer';
import Forget from '../component/Forget';
import selectColor from '../component/splash';
import accountType from '../component/accountType';
import otp from '../component/otp';
import selectCategory from '../component/selectCategory';
import subCategory from '../component/subCategory';
import chatDetail from '../component/chatDetail';
import searchScreen from '../component/searchScreen';
import allChat from './../component/allChat';
import allOfferListing from './../component/allOfferListing';
import offerDetail from './../component/offerDetail';
import saveOffer from './../component/saveOffer';
import offerProfile from './../component/offerProfile';
import getStarted1 from './../component/getStarted1';
import getStarted2 from './../component/getStarted2';
import getStarted3 from './../component/getStarted3';
import getStarted4 from './../component/getStarted4';
import personalDetail from './../component/personalDetail';
import personalDetail1 from './../component/personalDetail1';
import personalDetail2 from './../component/personalDetail2';
import dashBoardBottomTab from './dashBoardBottomTab';
import dashBoardBottomRetailer from './dashBoardBottomRetailer';
import createOffer from './../component/createOffer';
import subcategories from './../component/subcategories';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    
    personalDetail2: {
        screen: personalDetail2,
        navigationOptions: {
            header: null,
        },
    },
    personalDetail1: {
        screen: personalDetail1,
        navigationOptions: {
            header: null,
        },
    },
    personalDetail: {
        screen: personalDetail,
        navigationOptions: {
            header: null,
        },
    },
    getStarted1: {
        screen: getStarted1,
        navigationOptions: {
            header: null,
        },
    },
    getStarted2: {
        screen: getStarted2,
        navigationOptions: {
            header: null,
        },
    },
    getStarted3: {
        screen: getStarted3,
        navigationOptions: {
            header: null,
        },
    },
    getStarted4: {
        screen: getStarted4,
        navigationOptions: {
            header: null,
        },
    },
    offerProfile: {
        screen: offerProfile,
        navigationOptions: {
            header: null,
        },
    },
    saveOffer: {
        screen: saveOffer,
        navigationOptions: {
            header: null,
        },
    },
    offerDetail: {
        screen: offerDetail,
        navigationOptions: {
            header: null,
        },
    },
    allOfferListing: {
        screen: allOfferListing,
        navigationOptions: {
            header: null,
        },
    },
    searchScreen: {
        screen: searchScreen,
        navigationOptions: {
            header: null,
        },
    },
    allChat: {
        screen: allChat,
        navigationOptions: {
            header: null,
        },
    },
    subCategory: {
        screen: subCategory,
        navigationOptions: {
            header: null,
        },
    },
    chatDetail: {
        screen: chatDetail,
        navigationOptions: {
            header: null,
        },
    },
    tab: {
        screen: dashBoardBottomTab,
        navigationOptions: {
            header: null,
        },
    },
    tab2: {
        screen: dashBoardBottomRetailer,
        navigationOptions: {
            header: null,
        },
    },
    selectCategory: {
        screen: selectCategory,
        navigationOptions: {
            header: null,
        },
    },
    otp: {
        screen: otp,
        navigationOptions: {
            header: null,
        },
    },
    accountType: {
        screen: accountType,
        navigationOptions: {
            header: null,
        },
    },
    selectColor: {
        screen: selectColor,
        navigationOptions: {
            header: null,
        },
    },
    SignInShoper: {
        screen: SignInShoper,
        navigationOptions: {
            header: null,
        },
    },
    SignUpShoper: {
        screen: SignUpShoper,
        navigationOptions: {
            header: null,
        },
    },
    SignInRetailer: {
        screen: SingInRetailer,
        navigationOptions: {
            header: null,
        },
    },
    SignUpRetailer: {
        screen: SignUpRetailer,
        navigationOptions: {
            header: null,
        },
    },
    Forget: {
        screen: Forget,
        navigationOptions: {
            header: null,
        },
    },
    createOffer: {
        screen: createOffer,
        navigationOptions: {
            header: null,
        },
    },
    subcategories: {
        screen: subcategories,
        navigationOptions: {
            header: null,
        },
    },
    
  },{
      initialRouteName: 'selectColor'
  })

export default createAppContainer(Route);

