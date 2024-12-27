export const defaultLocale = 'en';

const enLocales = [
    'en-AU',
    'en-BZ',
    'en-CA',
    'en-cb',
    'en-GB',
    'en-IE',
    'en-IN',
    'en-JM',
    'en-MT',
    'en-MY',
    'en-NZ',
    'en-PH',
    'en-SG',
    'en-TT',
    'en-US',
    'en-ZA',
    'en-ZW'
];

const deLocales = ['de-AT', 'de-CH', 'de-DE', 'de-LI', 'de-LU'];

export function getEnOrDeLocale(locale: string): string | undefined {
    if (enLocales.includes(locale)) return 'en';
    else if (deLocales.includes(locale)) return 'de';
    return undefined;
}
