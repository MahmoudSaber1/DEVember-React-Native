import { StyleSheet } from "react-native";

export const mainPageStyle = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
    listTitle: {
        textAlign: "center",
        fontFamily: "InterSemibold",
        fontSize: 16,
        marginVertical: 5,
        marginBottom: 20,
    },
    selectedContainer: {
        position: "absolute",
        bottom: 100,
        right: 10,
        left: 10,
    },
});

export const apartmentStyle = StyleSheet.create({
    card: {
        backgroundColor: "white",

        flexDirection: "row",
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    image: {
        width: 150,
        aspectRatio: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    rightContainer: {
        padding: 10,
        flex: 1,
    },
    title: {
        fontFamily: "InterBold",
        marginBottom: 10,
        fontSize: 16,
    },
    description: {
        color: "gray",
    },
    price: {
        fontFamily: "InterBold",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "auto",
    },
});
