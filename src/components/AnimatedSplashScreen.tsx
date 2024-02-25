import React from "react";
import { StatusBar, View } from "react-native";
import LottieView from "lottie-react-native";
import Animated, { ZoomOut } from "react-native-reanimated";
import { Stack } from "expo-router";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

type AnimatedSplashScreenProps = {
    onAnimationFinish?: (isCancelled: boolean) => void;
    animation: React.RefObject<any>;
};

const AnimatedSplashScreen = ({ onAnimationFinish = () => {}, animation }: AnimatedSplashScreenProps) => {
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
                style={{
                    width: 500,
                    height: 500,
                }}
                loop={false}
                autoPlay
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("@/assets/lottie/netflix.json")}
            />
        </View>
    );
};

export default AnimatedSplashScreen;
