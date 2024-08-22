// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        switchToRussian: "Switch to Russian",
        switchToEnglish: "Switch to English",
        back: "Back",
        zodiac: {
          aquarius: {
            name: "Aquarius",
            dateRange: "Jan 20 - Feb 18",
          },
          aries: {
            name: "Aries",
            dateRange: "Mar 21 - Apr 19",
          },
          cancer: {
            name: "Cancer",
            dateRange: "Jun 21 - Jul 22",
          },
          capricorn: {
            name: "Capricorn",
            dateRange: "Dec 22 - Jan 19",
          },
          gemini: {
            name: "Gemini",
            dateRange: "May 21 - Jun 20",
          },
          leo: {
            name: "Leo",
            dateRange: "Jul 23 - Aug 22",
          },
          libra: {
            name: "Libra",
            dateRange: "Sep 23 - Oct 22",
          },
          pisces: {
            name: "Pisces",
            dateRange: "Feb 19 - Mar 20",
          },
          sagittarius: {
            name: "Sagittarius",
            dateRange: "Nov 22 - Dec 21",
          },
          scorpio: {
            name: "Scorpio",
            dateRange: "Oct 23 - Nov 21",
          },
          taurus: {
            name: "Taurus",
            dateRange: "Apr 20 - May 20",
          },
          virgo: {
            name: "Virgo",
            dateRange: "Aug 23 - Sep 22",
          },
        },
      },
    },
    ru: {
      translation: {
        welcome: "Добро пожаловать",
        switchToRussian: "Переключиться на русский",
        switchToEnglish: "Переключиться на английский",
        back: "Назад",
        zodiac: {
          aquarius: {
            name: "Водолей",
            dateRange: "20 Янв - 18 Фев",
          },
          aries: {
            name: "Овен",
            dateRange: "21 Мар - 19 Апр",
          },
          cancer: {
            name: "Рак",
            dateRange: "21 Июн - 22 Июл",
          },
          capricorn: {
            name: "Козерог",
            dateRange: "22 Дек - 19 Янв",
          },
          gemini: {
            name: "Близнецы",
            dateRange: "21 Май - 20 Июн",
          },
          leo: {
            name: "Лев",
            dateRange: "23 Июл - 22 Авг",
          },
          libra: {
            name: "Весы",
            dateRange: "23 Сен - 22 Окт",
          },
          pisces: {
            name: "Рыбы",
            dateRange: "19 Фев - 20 Мар",
          },
          sagittarius: {
            name: "Стрелец",
            dateRange: "22 Ноя - 21 Дек",
          },
          scorpio: {
            name: "Скорпион",
            dateRange: "23 Окт - 21 Ноя",
          },
          taurus: {
            name: "Телец",
            dateRange: "20 Апр - 20 Май",
          },
          virgo: {
            name: "Дева",
            dateRange: "23 Авг - 22 Сен",
          },
        },
      },
    },
  },
  lng: "en", // язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
