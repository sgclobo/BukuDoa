import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "#a1a1aa",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1C1C1E",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="missa"
        options={{
          title: "Missa",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="church" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orasoens"
        options={{
          title: "Orações",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="pray" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="devosoens"
        options={{
          title: "Devoções ",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="hands-praying" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="doutrina"
        options={{
          title: "Doutrina",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="book-bible" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
