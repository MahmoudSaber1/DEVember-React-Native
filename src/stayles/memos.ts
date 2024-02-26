import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
    },
    footer: {
        backgroundColor: "white",
        height: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    recordButton: {
        width: 70,
        height: 70,
        borderRadius: 35,

        borderWidth: 3,
        borderColor: "gray",
        padding: 3,

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    recordWave: {
        position: "absolute",
        top: -20,
        bottom: -20,
        left: -20,
        right: -20,
        borderRadius: 1000,
    },

    redCircle: {
        backgroundColor: "orangered",
        aspectRatio: 1,
    },
});

export const itemsStyle = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        gap: 15,

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    playbackContainer: {
        flex: 1,
        height: 80,
        justifyContent: "center",
    },
    playbackBackground: {
        height: 3,
        backgroundColor: "gainsboro",
        borderRadius: 5,
    },
    playbackIndicator: {
        width: 10,
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: "royalblue",
        position: "absolute",
    },

    wave: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
    },
    waveLine: {
        flex: 1,
        height: 30,
        backgroundColor: "gainsboro",
        borderRadius: 20,
    },
});
