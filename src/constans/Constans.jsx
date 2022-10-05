const MONTSERRAT = `'Montserrat'`;

export const Constants = {
  fonts: {
    $monts: MONTSERRAT,
  },

  fontSize: {
    montsSize: '12',
    montsHeroSize: '16',
  },

  lineHeight: {
    montsHeight: '0.9',
  },

  colors: {
    $white: '#FFFFFF',
    $blue: '#003094',
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
    gradient: ' linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 42.19%)',
  },

  breakpoints: {
    desktop: '1280px',
    tablet: '768px',
    mobile: '320px',
  },
};
