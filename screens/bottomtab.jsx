import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OtherLogin from "./otherlogin";
import Pokedex from "./pokedex";
import Posts from "./posts";
import Products from "./products";
import Profile from "./profile";


const Tab = createBottomTabNavigator();

const BottNav = () => {
    return (
        <Tab.Navigator initialRouteName="Profile">
            <Tab.Screen name="Pokedex"
                component={Pokedex}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="pokeball" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Posts"
                component={Posts}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Profile"
                component={Profile}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="supervised-user-circle" size={size} color={color} />
                    )
                }} />
            <Tab.Screen name="Login"
                component={OtherLogin}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#089779',
                    tabBarInactiveTintColor: '#002e60',
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="login" size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default BottNav;