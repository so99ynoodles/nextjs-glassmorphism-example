export type AvailableLocale = 'en' | 'ja' | 'kr';

export const getFontFamily = (locale: AvailableLocale) => {
    const defaultFontFamily = 'sans-serif, -apple-system, Oxygen, Ubuntu, Canterell, Fira Sans, Droid Sans, BlinkMacSystemFont'
    switch (locale) {
        case 'ja': return `'Noto Sans JP', ${defaultFontFamily}`
        case 'en': return `'Noto Sans SC', ${defaultFontFamily}`
        case 'kr': return `'Noto Sans KR', ${defaultFontFamily}`
        default: return defaultFontFamily
    }
}