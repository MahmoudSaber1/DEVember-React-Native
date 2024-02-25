import { StyleSheet } from "react-native";

export const onboardingStyle = StyleSheet.create({
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
