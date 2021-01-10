import { useRouter } from 'next/router';
import en from '../locales/en';
import ja from '../locales/ja';
import ko from '../locales/ko';

export function useLocale() {
  const { locale } = useRouter();
  switch (locale) {
    case 'ja':
    default:
      return ja;
    case 'en':
      return en;
    case 'ko':
      return ko;
  }
}
