const breakpoints = {
  mobile: 480,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
};

export const mq = {
  max: {
    mobile: `(max-width: ${breakpoints.mobile - 1}px)`,
    tablet: `(max-width: ${breakpoints.tablet - 1}px)`,
    laptop: `(max-width: ${breakpoints.laptop - 1}px)`,
    desktop: `(max-width: ${breakpoints.desktop - 1}px)`,
    max: `(min-width: ${breakpoints.desktop}px)`,
  },
  min: {
    mobile: `(min-width: ${breakpoints.mobile}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    laptop: `(min-width: ${breakpoints.laptop}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
  },
};
