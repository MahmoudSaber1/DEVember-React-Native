import React, { useRef } from "react";
import { View } from "react-native";

import LottieView from "lottie-react-native";
import Animated, { ZoomOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({ onAnimationFinish = () => {} }: { onAnimationFinish?: (isCancelled: boolean) => void }) => {
    const animation = useRef<LottieView>(null);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
            }}>
            <AnimatedLottieView
                exiting={ZoomOut}
                onAnimationFinish={onAnimationFinish}
                ref={animation}
                autoPlay
                loop={false}
                style={{
                    width: 500,
                    height: 500,
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("@/assets/lottie/netflix.json")}
            />
        </View>
    );
};

export default AnimatedSplashScreen;
