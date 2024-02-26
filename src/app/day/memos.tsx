import { useState } from "react";
import { Stack } from "expo-router";
import { View, FlatList, Pressable } from "react-native";
import { Audio } from "expo-av";
import { Recording } from "expo-av/build/Audio";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import MemoListItem, { Memo } from "@/components/MemoListItem";
import { mainStyle } from "@/stayles/memos";

const Memos = () => {
    const [recording, setRecording] = useState<Recording>();
    const [memos, setMemos] = useState<Memo[]>([]);

    const [audioMetering, setAudioMetering] = useState<number[]>([]);
    const metering = useSharedValue(-100);

    async function startRecording() {
        try {
            setAudioMetering([]);

            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY, undefined, 100);
            setRecording(recording);

            recording.setOnRecordingStatusUpdate((status) => {
                if (status.metering) {
                    metering.value = status.metering;
                    setAudioMetering((curVal) => [...curVal, status.metering || -100]);
                }
            });
        } catch (err) {
            console.error("Failed to start recording", err);
        }
    }

    async function stopRecording() {
        if (!recording) {
            return;
        }

        console.log("Stopping recording..");
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
        });
        const uri = recording.getURI();
        console.log("Recording stopped and stored at", uri);
        metering.value = -100;
        if (uri) {
            setMemos((existingMemos) => [{ uri, metering: audioMetering }, ...existingMemos]);
        }
    }

    const animatedRedCircle = useAnimatedStyle(() => ({
        width: withTiming(recording ? "60%" : "100%"),
        borderRadius: withTiming(recording ? 5 : 35),
    }));

    const animatedRecordWave = useAnimatedStyle(() => {
        const size = withTiming(interpolate(metering.value, [-160, -60, 0], [0, 0, -30]), { duration: 100 });
        return {
            top: size,
            bottom: size,
            left: size,
            right: size,
            backgroundColor: `rgba(255, 45, 0, ${interpolate(metering.value, [-160, -60, -10], [0.7, 0.3, 0.7])})`,
        };
    });

    return (
        <View style={mainStyle.container}>
            <Stack.Screen options={{ title: "Basic Recordering audio app" }} />
            <FlatList
                data={memos}
                renderItem={({ item }) => <MemoListItem memo={item} />}
            />

            <View style={mainStyle.footer}>
                <View>
                    <Animated.View style={[mainStyle.recordWave, animatedRecordWave]} />
                    <Pressable
                        style={mainStyle.recordButton}
                        onPress={recording ? stopRecording : startRecording}>
                        <Animated.View style={[mainStyle.redCircle, animatedRedCircle]} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Memos;
