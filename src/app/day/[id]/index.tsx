import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const DayDetailsScreen = () => {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.page}>
            <Stack.Screen options={{ title: `Day ${id}: Onboarding` }} />
            <Text style={styles.title}>Day {id} Details</Text>

            <Link
                href={`/day/onboarding`}
                asChild>
                <Button title="Go to Onboarding" />
            </Link>
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
