import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, SlideOutLeft, SlideInRight } from "react-native-reanimated";

const onboardingSteps = [
    {
        icon: "snowflake",
        title: "Welcome #DEVember",
        description: "Daily React Native tutorials during December",
    },
    {
        icon: "people-arrows",
        title: "Learn and grow together",
        description: "Learn by building 24 projects with React Native and Expo",
    },
    {
        icon: "book-reader",
        title: "Education for Children",
        description:
            'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing education to every child',
    },
];

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
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="inverted" />

            <GestureDetector gesture={swipes}>
                <View
                    style={styles.pageContent}
                    key={screenIndex}>
                    <Animated.View
                        entering={FadeIn}
                        exiting={FadeOut}>
                        <FontAwesome5
                            style={styles.image}
                            name={data.icon}
                            size={150}
                            color="#CEF202"
                        />
                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft}
                            style={styles.title}>
                            {data.title}
                        </Animated.Text>
                        <Animated.Text
                            entering={SlideInRight.delay(50)}
                            exiting={SlideOutLeft}
                            style={styles.description}>
                            {data.description}
                        </Animated.Text>
                    </View>

                    <View style={styles.stepIndicatorContainer}>
                        {onboardingSteps.map((_, index) => (
                            <View
                                key={index}
                                style={[styles.stepIndicator, { backgroundColor: index === screenIndex ? "#CEF202" : "grey" }]}
                            />
                        ))}
                    </View>

                    <View style={styles.buttonsRow}>
                        <Text
                            onPress={endOnboarding}
                            style={styles.buttonText}>
                            Skip
                        </Text>

                        <Pressable
                            onPress={onContinue}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#15141A",
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    image: {
        alignSelf: "center",
        margin: 20,
        marginTop: 80,
    },
    title: {
        color: "#FDFDFD",
        fontSize: 50,
        fontFamily: "Inter",
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    description: {
        color: "gray",
        fontSize: 20,
        fontFamily: "InterRegular",
        lineHeight: 28,
    },
    footer: {
        marginTop: 70,
    },

    buttonsRow: {
        marginTop: "auto",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    button: {
        backgroundColor: "#302E38",
        borderRadius: 50,
        alignItems: "center",
        flex: 1,
    },
    buttonText: {
        color: "#FDFDFD",
        fontFamily: "InterSemibold",
        fontSize: 16,

        padding: 15,
        paddingHorizontal: 25,
    },

    // steps
    stepIndicatorContainer: {
        marginTop: "auto",
        flexDirection: "row",
        gap: 8,
        marginHorizontal: 100,
    },
    stepIndicator: {
        flex: 1,
        height: 5,
        backgroundColor: "gray",
        borderRadius: 10,
    },
});

export default OnboardingScreen;
