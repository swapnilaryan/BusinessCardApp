import {SchemaWithId} from "../../../utils/schema";
import Contacts from "react-native-contacts";
import {Alert, PermissionsAndroid, Platform} from "react-native";

const mapToPhoneContact = (cardObj: SchemaWithId): Partial<Contacts.Contact> => {
    return {
        givenName: cardObj.name.split(" ")[0],
        familyName: cardObj.name.split(" ")[1],
        phoneNumbers: [{ label: "mobile", number: cardObj.phone }],
        emailAddresses: [{ label: "work", email: cardObj.email }],
        company: cardObj.company,
        jobTitle: cardObj.occupation,
        imAddresses : [{
            username: cardObj.linkedin || '',
            service: 'Linkedin'
        }]
    }
}

const saveContact = async (contact: Contacts.Contact) => {
    try {
        await Contacts.addContact(contact);
        Alert.alert('Successfully saved contact');
    } catch(e){
        Alert.alert('Error', 'Failed to save contact. Please try again!');
        console.log('failed', e);
    }
}

const createPhoneContact = (phoneContact: any) => {
    if (Platform.OS === 'android') {
        PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,PermissionsAndroid.PERMISSIONS.READ_CONTACTS])
            .then(() => {
                saveContact(phoneContact);
            })
            .catch((error) => {
                Alert.alert('Error', 'Failed in fetching permissions. Please try again !');
            });
        return;
    }
    saveContact(phoneContact);
}

export {
    createPhoneContact, mapToPhoneContact
}