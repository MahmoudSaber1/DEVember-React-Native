import { Stack } from "expo-router";
import { useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";

import MarkdownDisplay from "@/components/markdown-display";

import { template } from "@/utils/data";
import { markdownStyle } from "@/stayles/markdown";

const Markdown = () => {
    const [content, setContent] = useState(template);
    const [tab, setTab] = useState("edit");

    return (
        <View style={markdownStyle.page}>
            <Stack.Screen options={{ title: "Markdown Editor" }} />
            <View style={markdownStyle.tabsContainer}>
                <Pressable
                    onPress={() => setTab("edit")}
                    style={[markdownStyle.tab, { borderColor: tab === "edit" ? "mediumorchid" : "gray" }]}>
                    <Text style={[markdownStyle.tabText, { color: tab === "edit" ? "mediumorchid" : "gray" }]}>Edit</Text>
                </Pressable>
                <Pressable
                    onPress={() => setTab("preview")}
                    style={[markdownStyle.tab, { borderColor: tab === "preview" ? "mediumorchid" : "gray" }]}>
                    <Text style={[markdownStyle.tabText, { color: tab === "preview" ? "mediumorchid" : "gray" }]}>Preview</Text>
                </Pressable>
            </View>

            {tab === "edit" ? (
                <TextInput
                    value={content}
                    onChangeText={setContent}
                    multiline
                    numberOfLines={50}
                    style={markdownStyle.input}
                />
            ) : (
                <MarkdownDisplay>{content}</MarkdownDisplay>
            )}
        </View>
    );
};

export default Markdown;
