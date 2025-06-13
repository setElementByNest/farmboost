import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import LoginMain from '../screens/login/LoginMain';
import LoginSelect from '../screens/login/LoginSelect';
import LoginCreateFarm from '../screens/login/LoginCreateFarm';
import LoginCreatingFarm from '../screens/login/LoginCreatingFarm';
import LoginCreateDone from '../screens/login/LoginCreateDone';
import LoginNewUser from '../screens/login/LoginNewUser';
import Home from '../screens/home/Home';
import Livestock from '../screens/livestock/Livestock';
import BottomNav from './BottomNav';
import Notice from '../screens/notice/Notice';
import Setting from '../screens/setting/Setting';
import Loading from '../components/loading/Loading';

export type NavListProps = {
  loginmain: undefined;
  selectFarm: undefined;
  createfarm: undefined;
  creatingfarm: undefined;
  createdone: undefined;
  newuser: undefined;
  home: undefined;
  livestock: undefined;
  notice: undefined;
  setting: undefined;
  loading: undefined;
};

const Tab = createBottomTabNavigator<NavListProps>()

const Nav = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false, animation: 'shift' }} tabBar={(props) => <BottomNav {...props} />} >
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="livestock" component={Livestock} />
          <Tab.Screen name="notice" component={Notice} />
          <Tab.Screen name="setting" component={Setting} />
          {/* <Tab.Screen name="loginmain" component={LoginMain} />
          <Tab.Screen name="selectFarm" component={LoginSelect} />
          <Tab.Screen name="createfarm" component={LoginCreateFarm} />
          <Tab.Screen name="creatingfarm" component={LoginCreatingFarm} />
          <Tab.Screen name="createdone" component={LoginCreateDone} />
          <Tab.Screen name="newuser" component={LoginNewUser} />
          <Tab.Screen name="loading" component={Loading} /> */}
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default Nav