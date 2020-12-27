import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

const typography = new Typography(sutroTheme)

sutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(1 / 2),
  },
  h1: {
    fontWeight: 800,
    letterSpacing: "-1px",
  },
});
sutroTheme.scaleRatio = 5 / 2;

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;