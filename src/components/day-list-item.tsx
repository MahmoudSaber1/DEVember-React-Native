import { StyleSheet, Text, Pressable } from "react-native";
import { Link } from "expo-router";

interface DayListItemProps {
    day: number;
}

export const DayListItem = ({ day }: DayListItemProps) => {
    return (
        <Link
            href={`/${day}`}
            asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{day}</Text>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#F9EDE3",
        flex: 1,
        aspectRatio: 1,

        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#9b4521",
        borderRadius: 10,

        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "#9b4521",
        fontSize: 75,
        fontFamily: "AmaticBold",
    },
});
