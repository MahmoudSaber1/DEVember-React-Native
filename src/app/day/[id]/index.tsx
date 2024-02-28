import LinkItem from "@/components/link-item";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const DayDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    const day2 = id === "2" ? id : "";
    const day3 = id === "3" ? id : "";
    const day4 = id === "4" ? id : "";
    const day5 = id === "5" ? id : "";
    const day7 = id === "7" ? id : "";
    const day9 = id === "9" ? id : "";

    return (
        <View style={styles.page}>
            <Stack.Screen options={{ title: `Day ${id}: Onboarding` }} />
            <Text style={styles.title}>Day {id} Details</Text>

            <LinkItem
                btnName="Go to Onboarding"
                href="onboarding"
                day={day2}
            />
            <LinkItem
                btnName="Go to Markdown Render content"
                href="markdown"
                day={day3}
            />
            <LinkItem
                btnName="Go to Animated Splash Screen"
                href="splash-screen"
                day={day4}
            />
            <LinkItem
                btnName="Go to AirBNB Map"
                href="airbnb-maps"
                day={day5}
            />
            <LinkItem
                btnName="Go to Voice Memos"
                href="memos"
                day={day7}
            />
            <LinkItem
                btnName="Go to Authentication"
                href="auth/sign-in"
                day={day9}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#F9EDE3",
    },

    title: {
        fontSize: 45,
        fontFamily: "Inter",
        color: "#9b4521",
        marginBottom: 10,
    },
});

export default DayDetailsScreen;
