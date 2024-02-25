import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        InterRegular: Inter_400Regular,
        InterSemibold: Inter_600SemiBold,
        InterBold: Inter_700Bold,
        Inter: Inter_900Black,

        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);
    if (!fontsLoaded && !fontError) {
        return <ActivityIndicator />;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerStyle: { backgroundColor: "#F9EDE3" } }}>
                <Stack.Screen
                    name="index"
                    options={{ title: "Home Page" }}
                />
            </Stack>
        </GestureHandlerRootView>
    );
}
