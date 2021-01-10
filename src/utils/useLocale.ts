import { useRouter } from 'next/router';
import en from '../locales/en';
import ja from '../locales/ja';
import ko from '../locales/ko';

import { ja as dateJa, ko as dateKo, enUS as dateEn } from 'date-fns/locale';

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

export function getDateLocale(locale: string) {
  switch (locale) {
    case 'ja':
    default:
      return dateJa;
    case 'en':
      return dateEn;
    case 'ko':
      return dateKo;
  }
}
