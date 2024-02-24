import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const DayDetailsScreen = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{ title: `Day ${id}: Onboarding` }} />
            <Text>Day {id} Details</Text>
        </View>
    );
};

export default DayDetailsScreen;
