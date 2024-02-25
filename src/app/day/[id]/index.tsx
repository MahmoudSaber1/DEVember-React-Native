import LinkItem from "@/components/link-item";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const DayDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    const day2 = id === "2" ? id : "";

    return (
        <View style={styles.page}>
            <Stack.Screen options={{ title: `Day ${id}: Onboarding` }} />
            <Text style={styles.title}>Day {id} Details</Text>

            <LinkItem
                btnName="Go to Onboarding"
                href="onboarding"
                day={day2}
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
