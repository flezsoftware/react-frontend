import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import messages_pl from "./messages/pl";
import messages_en from "./messages/en";
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            pl: {
                translation: messages_pl
            },
            en: {
                translation: messages_en
            }
        },
        lng: "pl",
        fallbackLng: "pl",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;