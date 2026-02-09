// 공통 스타일 상수 및 유틸리티

// 폰트 패밀리
export const FONT_FAMILY = "'Poppins', 'Noto Sans KR', sans-serif";

// 공통 텍스트 스타일 객체
export const textStyles = {
  body: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '17px',
    lineHeight: '25px',
    letterSpacing: '-0.5px',
    wordBreak: 'keep-all' as const
  },
  bodyBold: {
    fontFamily: FONT_FAMILY,
    fontWeight: 700,
    fontSize: '17px',
    lineHeight: '25px',
    letterSpacing: '-0.5px',
    wordBreak: 'keep-all' as const
  },
  heading: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.5px',
    wordBreak: 'keep-all' as const
  },
  subheading: {
    fontFamily: FONT_FAMILY,
    fontWeight: 700,
    fontSize: '17px',
    lineHeight: '25px',
    letterSpacing: '-0.5px',
    wordBreak: 'keep-all' as const
  },
  small: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '12px',
    letterSpacing: '-0.3px'
  }
} as const;

// 색상 상수
export const colors = {
  textPrimary: '#212222',
  textSecondary: '#676666',
  textDark: '#141414',
  black: '#000000',
  white: '#ffffff',
  mint: '#C8F5E8',
  green: '#26b48e',
  greenHover: '#229c7a',
  blue: '#0098FF',
  blueLight: '#00C6FF',
  red: '#ef4444'
} as const;
