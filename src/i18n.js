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
          'Main': 'Main',
          'Person List': 'Person List',
          'Список фотографов': 'List of photographers',
          'Поиск': 'Seacrh',
          'Введите имя или город': 'Enter name or location',
          'Витебск, БССР': 'Vitebsk, BSSR',
          'Минск, Минская губерния, Российская империя': 'Minsk, Minsk Province, Russian Empire',
          'Унеча, Брянск, СССР': 'Unecha, Bryansk region, USSR',
          'Базан Владимир': 'Bazan Vladimir',
          'Барсуков Игорь': 'Barsukov Igor',
          'Бранштетер Павел': 'Branshteter Pavel',
          'Шмерлинг Михаил': 'Shmerling Mikhail',
          'Дашкевич Лев': 'Dashkevich Lev',
        },
      },
      ru: {
        translations: {
          'Main': 'Главная',
          'Person List': 'Список деятелей',
          'Список фотографов': 'Список фотографов',
          'Поиск': 'Поиск',
          'Введите имя или город': 'Введите имя или город',
          'Витебск, БССР': 'Витебск, БССР',
          'Минск, Минская губерния, Российская империя': 'Минск, Минская губерния, Российская империя',
          'Унеча, Брянск, СССР': 'Унеча, Брянск, СССР',
          'Базан Владимир': 'Базан Владимир',
          'Барсуков Игорь': 'Барсуков Игорь',
          'Бранштетер Павел': 'Бранштетер Павел',
          'Шмерлинг Михаил': 'Шмерлинг Михаил',
          'Дашкевич Лев': 'Дашкевич Лев',
        },
      },
      by: {
        translations: {
          'Main': 'Галоўная ',
          'Person List': 'Спіс дзеячаў',
          'Список фотографов': 'Cпіс фатографаў',
          'Поиск': 'Пошук',
          'Введите имя или город': 'Увядзіце імя альбо месца',
          'Витебск, БССР': 'Віцебск, БССР',
          'Минск, Минская губерния, Российская империя': 'Мінск, Мінская губерня, Расійская імперыя',
          'Унеча, Брянск, СССР': 'Унеча, Бранск, СССР',
          'Базан Владимир': 'Базан Уладзімір',
          'Барсуков Игорь': 'Барсукоў Ігар',
          'Бранштетер Павел': 'Бранштэтар Павел',
          'Шмерлинг Михаил': 'Шмерлінг Міхаіл',
          'Дашкевич Лев': 'Дашкевіч Леў',
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
