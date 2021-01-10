import { useRouter } from 'next/router';
import en from '../locales/en';
import ja from '../locales/ja';
import kr from '../locales/kr';

export function useLocale() {
  const { locale } = useRouter();
  switch (locale) {
    case 'ja':
    default:
      return ja;
    case 'en':
      return en;
    case 'kr':
      return kr;
  }
}
