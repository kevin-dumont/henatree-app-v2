export const COLORS = {
  neutral: {
    white: '#FFF',
    gray1: '#FAFAFA',
    gray2: '#EFF0F4',
    gray3: '#E1E1E1',
    gray4: '#A7A7A7',
    gray5: '#222',
  },
  sea: {
    dark: '#1A2A6B',
    darkest: '#201F3C',
    lightest: '#CFD3D9',
  },
  yellow: {
    light: '#FDF3C5',
    base: '#F8DB4A',
    secondary: '#FFE669',
  },
  orange: {
    base: '#F35634',
  },
};

export const FONTS = {
  light: 'Circular-Book',
  medium: 'Circular-Medium',
  bold: 'Circular-Bold',
};

export const THEME = {
  text: {
    color: COLORS.neutral.gray5,
  },
  title: {
    color: COLORS.sea.darkest,
  },
  hangoutCard: {
    titleColor: COLORS.sea.dark,
    dateColor: COLORS.orange.base,
    participantColor: COLORS.neutral.gray5,
    cityColor: COLORS.neutral.gray5,
  },
  textfield: {
    light: {
      backgroundColor: COLORS.neutral.white,
      shadowOpacity: 0.1,
    },
    dark: {
      backgroundColor: COLORS.neutral.gray2,
      shadowOpacity: 0,
    },
  },
};

export const MARGINS = {
  XXS: 4,
  XS: 8,
  S: 12,
  M: 16,
  L: 20,
  XL: 24,
  XXL: 32,
} as const;

export const BORDER_RADIUS = {
  CIRCLE: 100,
  IMPORTANT: 16,
  MEDIUM: 8,
  LOW: 4,
} as const;

export const SHADOW = {
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 16,
} as const;
