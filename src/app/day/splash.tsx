import LottieView from "lottie-react-native";
import { useRef } from "react";

import AnimatedSplashScreen from "@/components/AnimatedSplashScreen";
import { router } from "expo-router";

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);

    return (
        <AnimatedSplashScreen
            onAnimationFinish={() => router.back()}
            // onAnimationFinish={() => animation.current?.pause()}
            animation={animation}
        />
    );
};

export default AnimationScreen;
