import 'nprogress/nprogress.css'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import nprogress from 'nprogress'
import { useEffect } from 'react'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (typeof window === 'object') {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
