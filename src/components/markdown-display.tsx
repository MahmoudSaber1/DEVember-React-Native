import { ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";

import { markdownStyles, styles } from "@/stayles/markdown";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
    return (
        <ScrollView
            style={styles.page}
            contentInsetAdjustmentBehavior="automatic">
            <Markdown style={markdownStyles}>{children}</Markdown>
        </ScrollView>
    );
};

export default MarkdownDisplay;
