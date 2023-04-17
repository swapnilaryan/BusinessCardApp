import {Schema} from "../../../utils/schema";

export const INPUT_FIELDS: {key: keyof Schema, placeholder?:string, extraParams?: Record<string, string | number>}[] = [
    { key: 'name', placeholder: 'Name'},
    { key: 'occupation', placeholder: 'Occupation / Title'},
    { key: 'company', placeholder: 'Company'},
    { key: 'email', placeholder: 'Email Address', extraParams: {keyboardType: 'email-address'} },
    { key: 'phone', placeholder: 'Phone Number 10 digits', extraParams: { keyboardType: 'phone-pad', maxLength: 10} },
    { key: 'linkedin', placeholder: 'LinkedIn URL (optional)', extraParams: { keyboardType: 'url'} },
];