import { COLORS, FONTS } from '@/constants/theme';

export const BUTTON_THEME = {
  font: {
    bold: FONTS.bold,
    light: FONTS.light,
  },
  size: {
    s: 16,
    m: 18,
    l: 20,
  },
  primary: {
    filled: {
      text: {
        color: COLORS.sea.dark,
      },
      button: {
        borderWidth: 1,
        borderColor: COLORS.yellow.base,
        backgroundColor: COLORS.yellow.base,
      },
      buttonActiveColor: COLORS.yellow.secondary,
    },
    lined: {
      text: {
        color: COLORS.sea.dark,
        fontFamily: FONTS.bold,
      },
      button: {
        borderWidth: 1,
        borderColor: COLORS.yellow.base,
        backgroundColor: COLORS.neutral.white,
      },
      buttonActiveColor: COLORS.yellow.secondary,
    },
  },
  secondary: {
    filled: {
      text: {
        color: COLORS.neutral.white,
        fontFamily: FONTS.light,
      },
      button: {
        borderWidth: 1,
        borderColor: COLORS.sea.dark,
        backgroundColor: COLORS.sea.dark,
      },
      buttonActiveColor: COLORS.sea.darkest,
    },
    lined: {
      text: {
        color: COLORS.sea.dark,
      },
      button: {
        borderWidth: 1,
        borderColor: COLORS.sea.dark,
        backgroundColor: COLORS.neutral.white,
      },
      buttonActiveColor: COLORS.neutral.gray1,
    },
  },
  tertiary: {
    filled: {
      button: {
        borderWidth: 1,
        borderColor: COLORS.neutral.gray2,
        backgroundColor: COLORS.neutral.gray2,
      },
      text: {
        color: COLORS.sea.dark,
        fontFamily: FONTS.bold,
      },
      buttonActiveColor: COLORS.neutral.gray3,
    },
    lined: {
      text: {
        color: COLORS.sea.dark,
        fontFamily: FONTS.bold,
      },
      button: {
        borderWidth: 1,
        borderColor: COLORS.neutral.gray4,
        backgroundColor: COLORS.neutral.white,
      },
      buttonActiveColor: COLORS.neutral.gray1,
    },
  },
};
