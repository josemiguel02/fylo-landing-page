type BreakpointSize = keyof typeof breakpoints

const breakpoints = {
  sm: '30rem',
  md: '48rem',
  lg: '62rem',
  xl: '80rem',
  '2xl': '96rem'
}

export const mqAbove = (size: BreakpointSize, fn: () => string) => {
  return `
    @media screen and (min-width: ${breakpoints[size]}) {
      ${fn()}
    }
  `
}

export const mqBelow = (size: BreakpointSize, fn: () => string) => {
  return `
    @media screen and (max-width: ${breakpoints[size]}) {
      ${fn()}
    }
  `
}
