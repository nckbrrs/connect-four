import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles, theme } from 'twin.macro'

// This method of specifying global styles was recommended/provided by
// the docs of twin.macro, the library I use for combining tailwind with styled components
const CustomStyles = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }

    html,
    body {
      background: ${theme`colors.black`} !important;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    background: ${theme`colors.bone`}
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
