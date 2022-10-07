const MONTSERRAT = `'Montserrat'`;

export const Constants = {
  fonts: {
    $monts: MONTSERRAT,
  },

  fontSize: {
    montsSize: '12px',
    montsHeroSize: '16px',
  },

  lineHeight: {
    montsHeight: '1.2',
  },

  colors: {
    $white: '#FFFFFF',
    $blue: '#1E90FF',
    $blueDark: '#6495ED',
    $green: '#009231',
    $red: '#B70000',
    $violet: '#74009C',
    $lightGrey: '#B4B4B4',
    $black: '#000000',
  },

  spacing: value => `${4 * value}px`,

  options: {
    radius: '30px',
    buttonShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
    dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    gradient: ' linear-gradient(180deg, #5a8fff 0%, #003094 100%)',
  },

  breakpoints: {
    desktop: '1280px',
    tablet: '768px',
    mobile: '320px',
  },
};
