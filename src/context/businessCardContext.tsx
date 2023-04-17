import React, {createContext, useEffect, useState} from 'react';
import {SchemaWithId} from "../utils/schema";
import {getAsyncStorageData, updateAsyncStorageData} from "../utils/helper";

type BusinessCardContextType = {
    businessCards: SchemaWithId[];
    addBusinessCard: (businessCard: SchemaWithId) => void;
    deleteBusinessCard: (id: string) => void;
};

export const BusinessCardContext = createContext<BusinessCardContextType>({
    businessCards: [],
    addBusinessCard: () => {},
    deleteBusinessCard: () => {}
});

type Props = {
    children: React.ReactNode;
};

const BusinessCardContextProvider = ({ children }: Props): JSX.Element => {
    const [businessCards, setBusinessCards] = useState<SchemaWithId[]>([]);

    useEffect(() => {
        getAsyncStorageData().then((resp) => {
            setBusinessCards(resp)
        })
    }, []);

    const deleteBusinessCard = (id: string) => {
        const index = businessCards.findIndex((item) => item.id===id);
        businessCards.splice(index, 1);
        setBusinessCards([...businessCards]);
        updateAsyncStorageData([...businessCards]);
    }

    const addBusinessCard = (businessCard: SchemaWithId) => {
        setBusinessCards([...businessCards, businessCard]);
        updateAsyncStorageData([...businessCards, businessCard]);
    };

    return (
        <BusinessCardContext.Provider value={{ businessCards, addBusinessCard, deleteBusinessCard }}>
            {children}
        </BusinessCardContext.Provider>
    );
};

export default BusinessCardContextProvider