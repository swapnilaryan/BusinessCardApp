import React, {useContext, useReducer} from 'react';
import {Text, TextInput, View, TouchableOpacity, ScrollView, KeyboardTypeOptions} from 'react-native';
import Styles from "./style";
import {Schema, SchemaWithId} from "../../../utils/schema";
import {BusinessCardContext} from "../../../context/businessCardContext";
import {INPUT_FIELDS} from "./constants";
import {validateField} from "../../../utils/helper";
import {ACTIONS, reducer} from "./reducer";

export interface State extends Schema {
    errors?: Partial<Record<keyof Schema, string | null>> | null;
}

const initialState: State = {
    name: '',
    occupation: '',
    company: '',
    email: '',
    phone: '',
    linkedin: '',
    errors: null
};

const AddBusinessCard = ({ navigation } : {navigation: any}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { addBusinessCard } = useContext(BusinessCardContext);
    const handleInput = (key: keyof State) => (value: string) => {
        dispatch({ type: ACTIONS.SET_FIELD, payload: { [key]: value } });
    };

    const handleSave = async () => {
        const errors: Partial<Record<keyof Schema, string>> = {};
        INPUT_FIELDS.forEach(input => {
            const { key } = input;
            const value = state[key] || '';
            const error = validateField(key, value);
            if (error) {
                errors[key] = error;
            }
        });

        dispatch({ type: ACTIONS.SET_ERROR, payload: errors });
        const hasErrors = Object.values(errors).some(error => !!error);

        if (!hasErrors) {
            const tempCard = { ...state };
            delete tempCard.errors;
            const newBusinessCard: SchemaWithId = {
                ...tempCard,
                id: new Date().getTime().toString()
            }
            addBusinessCard(newBusinessCard);
            navigation.navigate("BusinessCardList");
        }
    };

    return (
        <ScrollView style={Styles.container}>
            <Text style={Styles.title}>Create a Business Card</Text>
            {INPUT_FIELDS.map((input, index) => {
                return (
                    <View key={index}>
                        <TextInput
                            key={input.key}
                            style={Styles.input}
                            placeholder={input.placeholder}
                            placeholderTextColor="#999"
                            value={state[input.key]}
                            onChangeText={handleInput(input.key as keyof State)}
                            {...input.extraParams}
                        />
                        {state.errors?.[input.key] && <Text style={Styles.errorText}>{state.errors[input.key]}</Text>}
                    </View>
                )
            })}
            <TouchableOpacity style={Styles.button} onPress={handleSave}>
                <Text style={Styles.buttonText}>Save Card</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AddBusinessCard;