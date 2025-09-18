import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const supported = ['th', 'en'] as const;
  const useLocale = supported.includes(locale as any) ? locale : 'th';
  const messages = (await import(`./messages/${useLocale}.json`)).default;
  return {messages};
});

export const locales = ['th', 'en'] as const;
export const defaultLocale = 'th' as const;
