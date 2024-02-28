import { signupStyles } from "@/stayles/auth.styles";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <View style={signupStyles.container}>
            <Text style={signupStyles.title}>Create an account</Text>

            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="jon@acme.com"
                style={signupStyles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={signupStyles.input}
                secureTextEntry
            />

            <Button
                title="Sign up"
                onPress={() => {}}
            />
            <Link href={"/day/auth/sign-in"}>Have an account? Sign in</Link>
        </View>
    );
};

export default Signup;
