const WHITE = "#EEE"
const LIGHT = "#C4C4C4"
const PRIMARY = "#1C042E"
const ACCENT = "#AB528D"
const SECONDARY = "#FBE067"

const BODYFAMILY = 'Montserrat, "Helvetica Neue", Arial, sans-serif'
const OTHERFAMILY = 'Roboto, "Helvetica Neue", Arial, sans-serif'

const headingTextStandards = {
  fontWeight: "heading",
  lineHeight: "heading",
  color: "white",
}

const bodyTextStandards = {
  fontFamily: "body",
  fontWeight: "body",
  lineHeight: "body",
}

const digitTextStandards = {
  fontFamily: "digit",
  fontWeight: "digit",
  lineHeight: "digit",
}

export default {
  useCustomProperties: true,
  breakpoints: ["576px", "768px", "992px", "1200px", "1360px", "1600px"],
  space: [0, 4, 8, 16, 20, 24, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 18, 20, 22, 32, 36, 42, 48, 54],
  fonts: {
    heading: '"Georgia", "Times New Roman", Times, serif',
    body: BODYFAMILY,
    digit: OTHERFAMILY,
  },
  lineHeights: {
    body: 1.5,
    heading: [1.22, null, null, 1.15],
    digit: 1.5,
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
    digit: 700,
    medium: 500,
  },
  colors: {
    white: WHITE,
    light: LIGHT,
    primary: PRIMARY,
    accent: ACCENT,
    secondary: SECONDARY,
    background: {
      primary: PRIMARY,
    },
    text: {
      heading: WHITE,
      body: LIGHT,
      digit: WHITE,
      accent: SECONDARY,
    },
  },
  styles: {
    root: {
      boxSizing: "border-box",
      fontFamily: "body",
      color: "text.body",
      backgroundColor: "background.primary",
      "*": {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
    },
    h1: {
      color: WHITE,
      fontWeight: 700,
    },
    h2: {
      fontSize: 5,
      lineHeight: [1.22, 1.18, 1.02],
      variant: "text.heading",
    },
    h3: {
      fontSize: 4,
      lineHeight: [1.22, 1.18, 1.23],
      variant: "text.heading",
    },
    h4: {
      fontSize: 3,
      lineHeight: [1.25, 1.43, 1.16],
      variant: "text.heading",
    },
    h5: {
      fontSize: 2,
      lineHeight: [1.35, 1.43, 1.36],
      variant: "text.heading",
    },
    h6: {
      fontSize: 1,
      lineHeight: [1.35, 1.43, 1.36],
      variant: "text.heading",
    },
    p: {
      variant: "text.body",
      fontSize: 2,
      lineHeight: [1.59],
      ...bodyTextStandards,
    },
    a: {
      variant: "text.link",
    },
  },
  grid: {
    container: {
      maxWidth: [
        "100%",
        "552px",
        "742px",
        "960px",
        "1100px",
        "1240px",
        "1440px",
      ],
      mx: "auto",
      px: [5, 5, 5, 5],
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      mx: [-5, -5, -5, -5],
    },
    column: {
      width: "100%",
      px: [5, 5, 5, 5],
    },
  },
  text: {
    heading: {
      ...headingTextStandards,
    },
    body: {
      ...bodyTextStandards,
    },
    home: {
      fontFamily: "heading",
      fontSize: [7, null, null, 9],
    },
    product: {
      fontFamily: BODYFAMILY,
      fontSize: [4, null, null, 5],
    },
    digit: {
      fontSize: [4, 0, 0, 4],
      ...digitTextStandards,
      color: WHITE,
    },
    tag: {
      fontFamily: OTHERFAMILY,
      fontSize: [1, 0, 0, 1],
      color: SECONDARY,
      textTransform: "uppercase",
      fontWeight: 400,
    },
    link: {
      color: WHITE,
      textDecoration: "none",
      fontWeight: "500",
      "&:hover": {
        color: "text.accent",
      },
    },
  },
  button: {
    primary: {
      color: "#fff",
      backgroundColor: "accent",
      border: "none",
      padding: "12px 35px 13px",
      maxWidth: "max-content",
      fontFamily: "body",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "4px",
    },
  },
  sizes: {
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    // eslint-disable-next-line quote-props
    1: "100%",
    screen: "100vw",
  },
}
