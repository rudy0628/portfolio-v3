import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './assets/locales/en.json';
import zh_tw from './assets/locales/zh_tw.json';

const resources = {
	en: {
		translation: en,
	},
	zh_tw: {
		translation: zh_tw,
	},
};

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	lng: 'zh_tw',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
