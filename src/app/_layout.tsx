import { useEffect, useState } from "react";
// import { ActivityIndicator } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import AnimatedSplashScreen from "@/components/AnimatedSplashScreen";
// import Animated, { FadeIn } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

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
            // SplashScreen.hideAsync();
            setAppReady(true);
        }
    }, [fontsLoaded, fontError]);

    const showAnimatedSplash = !appReady || !splashAnimationFinished;
    if (showAnimatedSplash) {
        return (
            <AnimatedSplashScreen
                onAnimationFinish={(isCancelled) => {
                    if (!isCancelled) {
                        setSplashAnimationFinished(true);
                    }
                }}
            />
        );
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
