import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'

import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue }
  },
  proTheme
)
