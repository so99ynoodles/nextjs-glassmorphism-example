import { theme as chakraTheme, Theme } from '@chakra-ui/react';
import { AvailableLocale, getFontFamily } from '../lib/locale';

export const createTheme = (locale: AvailableLocale): Theme => ({
    ...chakraTheme,
    fonts: {
        ...chakraTheme.fonts,
        heading: getFontFamily(locale),
        body: getFontFamily(locale),
    },
    fontWeights: {
        ...chakraTheme.fontWeights,
        normal: 400,
        medium: 500,
        bold: 700,
    },
    colors: {
        ...chakraTheme.colors,
    },
})

