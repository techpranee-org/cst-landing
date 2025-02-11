import { Public_Sans, Barlow } from 'next/font/google';
import { Crimson_Pro } from 'next/font/google';

// ----------------------------------------------------------------------

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }
}

export const primaryFont = Crimson_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const secondaryFont = Crimson_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// ----------------------------------------------------------------------

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    fontFamily: secondaryFont.style.fontFamily,
    // ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    ...responsiveFontSizes({ sm: 56, md: 62, lg: 68 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    fontFamily: secondaryFont.style.fontFamily,
    // ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    ...responsiveFontSizes({ sm: 44, md: 48, lg: 52 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    fontFamily: secondaryFont.style.fontFamily,
    // ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    ...responsiveFontSizes({ sm: 30, md: 34, lg: 36 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    fontFamily: secondaryFont.style.fontFamily,
    // ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    ...responsiveFontSizes({ sm: 24, md: 28, lg: 28 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    fontFamily: secondaryFont.style.fontFamily,
    // ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    ...responsiveFontSizes({ sm: 23, md: 24, lg: 24 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    fontFamily: secondaryFont.style.fontFamily,
    // ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
    ...responsiveFontSizes({ sm: 22, md: 22, lg: 22 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    // fontSize: pxToRem(16),
    fontSize: pxToRem(20),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    // fontSize: pxToRem(14),
    fontSize: pxToRem(18),
  },
  body1: {
    lineHeight: 1.5,
    // fontSize: pxToRem(16),
    fontSize: pxToRem(20),
  },
  body2: {
    lineHeight: 22 / 14,
    // fontSize: pxToRem(14),
    fontSize: pxToRem(18),
  },
  caption: {
    lineHeight: 1.5,
    // fontSize: pxToRem(12),
    fontSize: pxToRem(16),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    // fontSize: pxToRem(12),
    fontSize: pxToRem(16),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    // fontSize: pxToRem(14),
    fontSize: pxToRem(18),
    textTransform: 'capitalize',
  },
} as const;

export default typography;
