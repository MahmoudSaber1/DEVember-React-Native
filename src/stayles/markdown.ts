import { StyleSheet } from "react-native";

export const markdownStyle = StyleSheet.create({
    page: {
        backgroundColor: "whitesmoke",
        flex: 1,
        padding: 10,
    },
    input: {
        backgroundColor: "white",
        flex: 1,
        padding: 20,
        paddingTop: 20,
        borderRadius: 10,
        fontSize: 16,
    },

    tabsContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
    },
    tab: {
        flex: 1,
        padding: 10,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center",
    },
    tabText: {
        fontFamily: "InterBold",
    },
});

export const markdownStyles = StyleSheet.create({
    heading1: {
        fontFamily: "Inter",
        color: "#212020",
        marginTop: 15,
        marginBottom: 10,

        lineHeight: 40,
    },
    heading2: {
        fontFamily: "InterBold",
        color: "#404040",

        marginTop: 10,
        marginBottom: 5,
        lineHeight: 30,
    },
    body: {
        fontSize: 16,
        // fontFamily: 'Inter',
        lineHeight: 24,
    },
});

export const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
        padding: 10,
        borderRadius: 10,
    },
});
