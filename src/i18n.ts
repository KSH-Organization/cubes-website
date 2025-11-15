import { getRequestConfig } from 'next-intl/server';
import en from './messages/en.json' with { type: 'json' };
import ar from './messages/ar.json' with { type: 'json' };

export const locales = ['en', 'ar'];
export const defaultLocale = 'en';

const messages = { en, ar };

export default getRequestConfig(async ({ locale }) => {
  const localeString = locale || defaultLocale;
  return {
    locale: localeString,
    messages: messages[localeString as keyof typeof messages],
  };
});
