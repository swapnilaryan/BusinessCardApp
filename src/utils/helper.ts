import AsyncStorage from "@react-native-async-storage/async-storage";
import {Schema, SchemaWithId} from "./schema";

const updateAsyncStorageData = async (cards:SchemaWithId[]) => {
    try {
        await AsyncStorage.setItem('cards', JSON.stringify(cards));
    } catch(error) {
        console.error('Error in updating the async storage');
        return [];
    }
}

const getAsyncStorageData = async () => {
    try {
        const existingCards = await AsyncStorage.getItem('cards');
        return existingCards ? JSON.parse(existingCards) : [];
    } catch(error) {
        console.error('Error in fetching data from the async storage');
        return [];
    }
}


const validateField = (field: keyof Schema, value: string): string => {
    value = value.trim();
    const regex = {
        name: /^[a-zA-Z]+(?:\s+[a-zA-Z]+)?\s*$/,
        occupation: /^[A-Za-z\s]+$/,
        company: /^[A-Za-z\s]+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        linkedin: /^(https?:\/\/)?(www\.)?linkedin\.com\/(in\/)?[a-zA-Z0-9-_.]+$/,
        phone: /^(\+?\d{1,3}[- ]?)?\d{10}$/
    };
    if(field === 'linkedin' && value.trim() !== '' && !regex[field].test(value)) {
        return `Invalid ${field}`;
    } else if(field !== 'linkedin') {
        if (value.trim() === '') {
            return `${field} cannot be blank`;
        }
        if (!regex[field].test(value)) {
            return `Invalid ${field}`;
        }
    }
    return '';
};


export {
    updateAsyncStorageData,
    getAsyncStorageData,
    validateField
}