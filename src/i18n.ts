import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './assets/locales/en.json';
import zh_tw from './assets/locales/zh_tw.json';
import zh_cn from './assets/locales/zh_cn.json';
import ko from './assets/locales/ko.json';
import ja from './assets/locales/ja.json';

const resources = {
	en: {
		translation: en,
	},
	tw: {
		translation: zh_tw,
	},
	cn: {
		translation: zh_cn,
	},
	kr: {
		translation: ko,
	},
	jp: {
		translation: ja,
	},
};

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
