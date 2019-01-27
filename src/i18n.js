import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Main: 'Main',
          'Person List': 'Person List',

        },
      },
      ru: {
        translations: {
          Main: 'Главная',
          'Person List': 'Список деятелей',
        },
      },
      by: {
        translations: {
          Main: 'Галоўная ',
          'Person List': 'Спіс дзеячаў',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: '.',

    interpolation: {
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
