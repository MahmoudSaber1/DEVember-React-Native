import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";

import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import apartments from "@/utils/appartments.json";
import { mainPageStyle } from "@/stayles/airbnb-maps";
import CustomMarker from "@/components/CustomMarker";
import ApartmentListItem from "@/components/ApartmentListItem";

type Apartment = (typeof apartments)[0];

const AirBNB = () => {
    const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    // variables
    const snapPoints = useMemo(() => [80, "50%", "90%"], []);

    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />

            <MapView
                provider={PROVIDER_GOOGLE}
                style={mainPageStyle.map}
                region={mapRegion}>
                {apartments.map((apartment) => (
                    <CustomMarker
                        key={apartment.id}
                        apartment={apartment}
                        onPress={() => setSelectedApartment(apartment)}
                    />
                ))}
            </MapView>

            {/* Display selected Apartment */}
            {selectedApartment && (
                <ApartmentListItem
                    apartment={selectedApartment}
                    containerStyle={mainPageStyle.selectedContainer}
                />
            )}

            <BottomSheet
                index={0}
                snapPoints={snapPoints}>
                <View style={{ flex: 1 }}>
                    <Text
                        onPress={() => setSelectedApartment(null)}
                        style={mainPageStyle.listTitle}>
                        Over {apartments.length} places
                    </Text>
                    <BottomSheetFlatList
                        data={apartments}
                        contentContainerStyle={{ gap: 10, padding: 10 }}
                        renderItem={({ item }) => <ApartmentListItem apartment={item} />}
                    />
                </View>
            </BottomSheet>
        </View>
    );
};

export default AirBNB;
