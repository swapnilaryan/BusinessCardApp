type IconName = "email" | "name" | "company" | "phone" | "linkedin";
type RootStackParamList = {
    BusinessCardList: undefined;
    AddBusinessCard: undefined;
    BusinessCardDetails: { id: string };
};


export type {IconName, RootStackParamList };
