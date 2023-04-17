import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    listStyle: {
        paddingBottom: 60
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 2,
        margin: 16,
        marginBottom: 0,
        flex: 1
    },
    addButton: {
        backgroundColor: '#008CBA',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10
    },
    addButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textColor: {
        color: '#000000'
    }
});

export default Styles;