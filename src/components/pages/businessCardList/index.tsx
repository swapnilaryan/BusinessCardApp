import React, {useContext} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View, SafeAreaView} from "react-native";
import TextIcon from "../../molecules/textIcon";
import {IconName, RootStackParamList} from "../../../../constants/type";
import Styles from "./style";
import {StackNavigationProp} from "@react-navigation/stack";
import {BusinessCardContext} from "../../../context/businessCardContext";
import {SchemaWithId} from "../../../utils/schema";


type BusinessCardListProps = {
    navigation: StackNavigationProp<RootStackParamList, 'BusinessCardList'>;
};

const BusinessCardList = ({navigation}: BusinessCardListProps): JSX.Element => {
    const gotoAddBusinessCard = () => navigation.navigate('AddBusinessCard');
    const gotoBusinessCardDetails = (id: string): void => navigation.navigate('BusinessCardDetails', { id });
    const { businessCards } = useContext(BusinessCardContext);

    const renderBusinessCard = ({ item }: { item: SchemaWithId }): JSX.Element => {
        let itemKeys = Object.keys(item);
        const index = itemKeys.indexOf("id");
        itemKeys.splice(index, 1);
        return (
            <View style={Styles.cardContainer}>
                {
                    itemKeys.filter((itemKey: string) => {
                        return item[itemKey as keyof SchemaWithId];
                    }).map((filteredItem: string, index: number) => {
                        return <TextIcon key={index} text={item[filteredItem  as keyof SchemaWithId] || ''} icon={filteredItem as IconName} />
                    })
                }
            </View>
        );
    };

    return (
        <SafeAreaView style={Styles.container}>
            {
                businessCards.length ? <FlatList contentContainerStyle={Styles.listStyle} data={businessCards} renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => gotoBusinessCardDetails(item.id)}>
                        {renderBusinessCard({ item })}
                    </TouchableOpacity>
                )}/> : <Text style={Styles.textColor}>List is Empty</Text>
            }

            <View style={Styles.addNewCardBtn}>
                <Button
                    title="Add Business Card"
                    onPress={gotoAddBusinessCard}
                />
            </View>

        </SafeAreaView>
    );
};

export default BusinessCardList;