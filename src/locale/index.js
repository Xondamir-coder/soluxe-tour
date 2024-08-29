import { createI18n } from 'vue-i18n';
import en from './en.json';
import zh from './zh.json';
import uz from './uz.json';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const locale = localStorage.getItem('lang') || navigator.language.split('-')[0];
const possibleLocales = ['en', 'zh', 'uz'];

export const i18n = createI18n({
	locale: possibleLocales.includes(locale) ? locale : 'en',
	fallbackLocale: 'en',
	messages: {
		en,
		zh,
		uz
	}
});

export const changeLang = newLang => {
	localStorage.setItem('lang', newLang);
	i18n.global.locale = newLang;
	ScrollTrigger.getAll().forEach(trigger => trigger.update());
};
