import { View, Button, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Stack } from "expo-router";

const SplashScreen = () => {
    const animation = useRef<LottieView>(null);

    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar
                barStyle="light-content"
                backgroundColor="black"
            />
            <LottieView
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#eee",
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("@/assets/lottie/netflix.json")}
            />

            <Button
                title="Play"
                onPress={() => animation.current?.play()}
            />
            <Button
                title="Pause"
                onPress={() => animation.current?.pause()}
            />
            <Button
                title="Reset"
                onPress={() => animation.current?.reset()}
            />
        </View>
    );
};

export default SplashScreen;
