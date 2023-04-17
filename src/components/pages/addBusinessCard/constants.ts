import {Schema} from "../../../utils/schema";

export const INPUT_FIELDS: {key: keyof Schema, placeholder?:string, extraParams?: Record<string, string | number>}[] = [
    { key: 'name', placeholder: 'Name', extraParams: { keyboardType: 'email-address', maxLength: 10}  },
    { key: 'occupation', placeholder: 'Occupation / Title', extraParams: { keyboardType: 'email-address', maxLength: 10}  },
    { key: 'company', placeholder: 'Company', extraParams: { keyboardType: 'email-address', maxLength: 10}  },
    { key: 'email', placeholder: 'Email Address', extraParams: {keyboardType: 'email-address', maxLength: 10} },
    { key: 'phone', placeholder: 'Phone Number 10 digits', extraParams: { keyboardType: 'phone-pad', maxLength: 10} },
    { key: 'linkedin', placeholder: 'LinkedIn URL (optional)', extraParams: { keyboardType: 'url', maxLength: 10} },
];