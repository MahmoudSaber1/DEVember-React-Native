import { StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import { DayListItem } from "@/components/day-list-item";

const days = [...Array(24).keys()];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                contentContainerStyle={styles.content}
                columnWrapperStyle={styles.column}
                numColumns={2}
                renderItem={({ item }) => <DayListItem day={item + 1} />}
                keyExtractor={(item) => item.toString()}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    content: {
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    },
});
