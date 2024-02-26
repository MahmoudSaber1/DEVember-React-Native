import React, { useRef } from "react";
import { StatusBar, View } from "react-native";
import LottieView from "lottie-react-native";
import Animated, { ZoomOut } from "react-native-reanimated";
import { Stack } from "expo-router";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

type AnimatedSplashScreenProps = {
    onAnimationFinish?: (isCancelled: boolean) => void;
};

const AnimatedSplashScreen = ({ onAnimationFinish = () => {} }: AnimatedSplashScreenProps) => {
    const animation = useRef<LottieView>(null);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
            }}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar
                barStyle="light-content"
                backgroundColor="black"
            />
            <AnimatedLottieView
                exiting={ZoomOut}
                ref={animation}
                onAnimationFinish={onAnimationFinish}
                loop={false}
                autoPlay
                style={{
                    width: "80%",
                    maxWidth: 400,
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("@/assets/lottie/netflix.json")}
            />
        </View>
    );
};

export default AnimatedSplashScreen;
