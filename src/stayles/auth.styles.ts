import { StyleSheet } from "react-native";

export const signinStyles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: "center",
        flex: 1,
    },
    title: {
        fontFamily: "InterSemibold",
        fontSize: 24,
        color: "dimgray",
    },
    input: {
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 10,
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 5,
    },
});

export const signupStyles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: "center",
        flex: 1,
    },
    title: {
        fontFamily: "InterSemi",
        fontSize: 24,
        color: "dimgray",
    },
    input: {
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 10,
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 5,
    },
});
