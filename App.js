import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image } from 'react-native';

import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';
import CartScreen from './CartScreen';
import PaymentScreen from './PaymentScreen';
import SuccessScreen from './SuccessScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabIcon({ name, focused }) {
  const icons = {
    Home: require('./assets/images/nha.png'),
    Notify: require('./assets/images/chuong.png'),
    Scan: require('./assets/images/Vector.png'),
    History: require('./assets/images/time.png'),
    Cart: require('./assets/images/gio.png'),
  };
  return (
    <View style={{
      alignItems: 'center', justifyContent: 'center',
      backgroundColor: focused ? '#e8f0ff' : 'transparent',
      borderRadius: 10, padding: 6,
      borderWidth: focused ? 2 : 0,
      borderColor: focused ? '#e040a0' : 'transparent',
    }}>
      <Image source={icons[name]} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#fff',
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 10,
          position: 'absolute',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Home" focused={focused} /> }}
      />
      <Tab.Screen
        name="Notify"
        component={HomeScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Notify" focused={focused} /> }}
      />
      <Tab.Screen
        name="ScanTab"
        component={ScanScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Scan" focused={focused} /> }}
      />
      <Tab.Screen
        name="History"
        component={HomeScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="History" focused={focused} /> }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Cart" focused={focused} /> }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
