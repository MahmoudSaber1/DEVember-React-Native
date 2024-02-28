import { useState } from "react";
import { Link, Stack, router } from "expo-router";
import { View, Text, TextInput, Button } from "react-native";

import { signinStyles } from "@/stayles/auth.styles";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSignInPressed = async () => {
        setError("");
        try {
            console.log({ email, password });
            // if (isSignedIn) {
            //     router.push("/");
            // } else {
            setError("Something went wrong! ");
            // }
        } catch (e) {
            // setError("Something went wrong! " + nextStep.signInStep);
        }
    };

    return (
        <View style={signinStyles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Text style={signinStyles.title}>Sign in</Text>

            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="jon@acme.com"
                style={signinStyles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={signinStyles.input}
                secureTextEntry
            />

            <Button
                title="Sign in"
                onPress={onSignInPressed}
            />
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            <Link href={"/day/auth/sign-up"}>New here? Sign up</Link>
        </View>
    );
};

export default Signin;
