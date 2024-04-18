import { StatusBar } from "expo-status-bar";
import { Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllSpots from "./screens/AllSpots";
import AddSpot from "./screens/AddSpot";
import SpotList from "./components/SpotList";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import SpotDetailes from "./screens/SpotDetails";
import { fetchSurfSpots } from "./util/http";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App started");

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            contentStyle: { backgroundColor: Colors.primary100 },
            headerTintColor: Colors.gray700,
          }}
        >
          <Stack.Screen
            name="Explore"
            component={Map}
            options={({ navigation }) => ({
              title: "Explore",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddSpot")}
                />
              ),
            })}
          />

          <Stack.Screen name="AddSpot" component={AddSpot} />
          <Stack.Screen name="SpotDetails" component={SpotDetailes} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
