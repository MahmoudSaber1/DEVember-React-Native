import { View, Text, Image, ViewStyle } from "react-native";
import React from "react";

import apartments from "@/utils/appartments.json";
import { apartmentStyle } from "@/stayles/airbnb-maps";

type ApartmentListItem = {
    apartment: (typeof apartments)[0];
    containerStyle?: ViewStyle;
};

const ApartmentListItem = ({ apartment, containerStyle }: ApartmentListItem) => {
    return (
        <View style={[apartmentStyle.card, containerStyle]}>
            <Image
                source={{ uri: apartment.image }}
                style={apartmentStyle.image}
            />
            <View style={apartmentStyle.rightContainer}>
                <Text style={apartmentStyle.title}>{apartment.title}</Text>
                <Text style={apartmentStyle.description}>Stay at this apartment for an affordable price</Text>

                <View style={apartmentStyle.footer}>
                    <Text style={apartmentStyle.price}>$ {apartment.price} night</Text>
                    <Text style={apartmentStyle.price}>
                        ★ {apartment.rating} ({apartment.numberOfStars})
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ApartmentListItem;
