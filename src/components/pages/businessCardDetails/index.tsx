import React, {useContext} from 'react';
import {Alert, Text, TouchableOpacity, View} from "react-native";

import Styles from "./style";
import {SchemaWithId} from "../../../utils/schema";
import {BusinessCardContext} from "../../../context/businessCardContext";
import {createPhoneContact, mapToPhoneContact} from "./utils";

const BusinessCardDetails = (props: any): JSX.Element => {
    const id = props?.route?.params?.id;
    const navigation = props?.navigation;
    const {businessCards, deleteBusinessCard} = useContext(BusinessCardContext);
    const fallbackObj = {company: "", email: "", id: "", linkedin: "", name: "", occupation: "", phone: ""}
    const cardObj:SchemaWithId = businessCards.find((item) => item.id === id) || fallbackObj;


    let itemKeys = Object.keys(cardObj);
    const index = itemKeys.indexOf("id");
    itemKeys.splice(index, 1);

    const handleExportAsPhoneContact = () => {
        const phoneContact = mapToPhoneContact(cardObj);
        createPhoneContact(phoneContact);
    }


    const handleDelete = () => {
        Alert.alert(
            'Delete Item',
            `Are you sure you want to delete ${cardObj.name}'s business card?`,
            [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        deleteBusinessCard(id);
                        navigation.navigate('BusinessCardList');
                    },
                },
            ],
        );
    }

    return (
        cardObj.email ? <View style={Styles.container}>
            {
                itemKeys.map((itemKey: string, index: number) => {
                    const value = cardObj[itemKey as keyof SchemaWithId];
                    return value && <Text key={index} style={Styles.text}>{itemKey}: {value}</Text>
                })
            }
            <TouchableOpacity style={Styles.deleteBtn} onPress={handleDelete}>
                <Text style={Styles.buttonText}>Delete Item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.addBtn} onPress={handleExportAsPhoneContact}>
                <Text style={Styles.buttonText}>Add to Contact</Text>
            </TouchableOpacity>
        </View> : <></>
    )
}

export default BusinessCardDetails;