import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "SPUSTIŤ": "LAUNCH",
      "ČÍTAJ VIAC": "READ MORE",
      "FILTER": "FILTER",
      "Výber objektu:": "Choose object:",
      "SATELIT": "SATELLITE",
      "ODPAD": "DEBRIS",
      "Satelit": "Satellite",
      "Odpad": "Debris",
      "Počet objektov": "Number of objects",
      "Vesmírny odpad": "Space debris",
      "Satelity": "Satellites",
      "Hrozby": "Threats",
      "Info o App": "About",
      "DOMOV": "HOME",
      "Výber orbity:": "Choose orbit:",
      "Nízka": "Low",
      "Stredná": "Middle",
      "Vysoká": "High",
      "Geostacionárná": "Geostationary",
      "Jazyk": "Language",
      "APOGEUM": "APOGEE",
      "PERIGEUM": " PERIGEE",
      "VLASTNÍK": "OWNER",
      "TYP": "TYPE",
      "NÁZOV": "NAME",
      "Vzdialenosť": "Distance",
      "ZEMEPISNÁ ŠÍRKA": "LATITUDE",
      "ZEMEPISNÁ DĹŽKA": "LONGITUDE",
      "KOZMICKÝ STRÁŽCA": "SPACE GUARDIAN",
      "Monitorovanie kozmického odpadu": "Space debris monitoring",
      "Kozmický Strážca - Kozmický odpad PDF verzia": "Space Guardian - Space Debris PDF version",
      "Unless otherwise noted, the contents of this document, app andsource code are licensed under a license": "Ak nie je uvedené inak, na obsah tohto dokumentu, aplikácie a zdrojového kódu sa vzťahuje licencia",
      "Optimalizácia": "Optimalization",
      "Menej objektov": "Less objects",
      "25% nízka orbita, 50% ostatné": "25% low orbit, 50% other",
      "Vypnúť animáciu": "Turn off animation",
      "Filter: 25% nízka orbita, 50% ostatné": "Filter: 25% low orbit, 50% other",
    }
  },

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;