export interface Schema {
    name: string;
    occupation: string;
    company: string;
    email: string;
    phone: string;
    linkedin?: string;
}
export interface SchemaWithId extends Schema {
    id: string;
}

export interface SchemaWithKeyBoardType extends Schema {
    keyBoardType: string
}
