import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect, useCallback } from "react";
import { AVPlaybackStatus, Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";

import { itemsStyle } from "@/stayles/memos";

export type Memo = {
    uri: string;
    metering: number[];
};

const MemoListItem = ({ memo }: { memo: Memo }) => {
    const [sound, setSound] = useState<Sound>();
    const [status, setStatus] = useState<AVPlaybackStatus>();

    async function loadSound() {
        const { sound } = await Audio.Sound.createAsync({ uri: memo.uri }, { progressUpdateIntervalMillis: 1000 / 60 }, onPlaybackStatusUpdate);
        setSound(sound);
    }

    const onPlaybackStatusUpdate = useCallback(
        async (newStatus: AVPlaybackStatus) => {
            setStatus(newStatus);

            if (!newStatus.isLoaded || !sound) {
                return;
            }

            if (newStatus.didJustFinish) {
                await sound?.setPositionAsync(0);
            }
        },
        [sound]
    );

    useEffect(() => {
        loadSound();
    }, [memo]);

    async function playSound() {
        if (!sound) {
            return;
        }

        if (status?.isLoaded && status.isPlaying) {
            await sound.pauseAsync();
        } else {
            await sound.replayAsync();
        }
    }

    useEffect(() => {
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    const formatMillis = (millis: number) => {
        const minutes = Math.floor(millis / (1000 * 60));
        const seconds = Math.floor((millis % (1000 * 60)) / 1000);

        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const isPlaying = status?.isLoaded ? status.isPlaying : false;
    const position = status?.isLoaded ? status.positionMillis : 0;
    const duration = status?.isLoaded ? status.durationMillis : 1;

    const progress = position / duration!!;

    let numLines = 50;
    let lines = [];

    for (let i = 0; i < numLines; i++) {
        const meteringIndex = Math.floor((i * memo.metering.length) / numLines);
        const nextMeteringIndex = Math.ceil(((i + 1) * memo.metering.length) / numLines);
        const values = memo.metering.slice(meteringIndex, nextMeteringIndex);
        const average = values.reduce((sum, a) => sum + a, 0) / values.length;
        // lines.push(memo.metering[meteringIndex]);
        lines.push(average);
    }

    return (
        <View style={itemsStyle.container}>
            <FontAwesome5
                onPress={playSound}
                name={isPlaying ? "pause" : "play"}
                size={20}
                color={"gray"}
            />

            <View style={itemsStyle.playbackContainer}>
                <View style={itemsStyle.wave}>
                    {lines.map((db, index) => (
                        <View
                            key={index}
                            style={[
                                itemsStyle.waveLine,
                                {
                                    height: interpolate(db, [-60, 0], [5, 50], Extrapolation.CLAMP),
                                    backgroundColor: progress > index / lines.length ? "royalblue" : "gainsboro",
                                },
                            ]}
                        />
                    ))}
                </View>

                <Text
                    style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        color: "gray",
                        fontFamily: "Inter",
                        fontSize: 12,
                    }}>
                    {formatMillis(position || 0)} / {formatMillis(duration || 0)}
                </Text>
            </View>
        </View>
    );
};

export default MemoListItem;
