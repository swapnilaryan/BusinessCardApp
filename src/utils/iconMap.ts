import EmailIcon from "../components/atoms/icons/email";
import UserIcon from "../components/atoms/icons/user";
import CompanyIcon from "../components/atoms/icons/company";
import LinkedInIcon from "../components/atoms/icons/linkedIn";
import PhoneIcon from "../components/atoms/icons/phone";
import OccupationIcon from "../components/atoms/icons/occupation";

const iconMap = (iconName: string): () => JSX.Element => {
    const map:Record<string, any> = {
        email: EmailIcon,
        name: UserIcon,
        company: CompanyIcon,
        phone: PhoneIcon,
        linkedin: LinkedInIcon,
        occupation: OccupationIcon
    };

    return map[iconName];
};

export {iconMap};