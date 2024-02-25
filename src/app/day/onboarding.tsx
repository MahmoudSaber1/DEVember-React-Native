import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, SafeAreaView, Pressable } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, SlideOutLeft, SlideInRight } from "react-native-reanimated";

import { onboardingSteps } from "@/utils/data";
import { onboardingStyle } from "@/stayles/onboarding";

const OnboardingScreen = () => {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );

    return (
        <SafeAreaView style={onboardingStyle.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="inverted" />

            <GestureDetector gesture={swipes}>
                <View
                    style={onboardingStyle.pageContent}
                    key={screenIndex}>
                    <Animated.View
                        entering={FadeIn}
                        exiting={FadeOut}>
                        <FontAwesome5
                            style={onboardingStyle.image}
                            name={data.icon}
                            size={150}
                            color="#CEF202"
                        />
                    </Animated.View>

                    <View style={onboardingStyle.footer}>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft}
                            style={onboardingStyle.title}>
                            {data.title}
                        </Animated.Text>
                        <Animated.Text
                            entering={SlideInRight.delay(50)}
                            exiting={SlideOutLeft}
                            style={onboardingStyle.description}>
                            {data.description}
                        </Animated.Text>
                    </View>

                    <View style={onboardingStyle.stepIndicatorContainer}>
                        {onboardingSteps.map((_, index) => (
                            <View
                                key={index}
                                style={[onboardingStyle.stepIndicator, { backgroundColor: index === screenIndex ? "#CEF202" : "grey" }]}
                            />
                        ))}
                    </View>

                    <View style={onboardingStyle.buttonsRow}>
                        <Text
                            onPress={endOnboarding}
                            style={onboardingStyle.buttonText}>
                            Skip
                        </Text>

                        <Pressable
                            onPress={onContinue}
                            style={onboardingStyle.button}>
                            <Text style={onboardingStyle.buttonText}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    );
};

export default OnboardingScreen;
