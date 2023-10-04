import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { DefaultLayout } from './layouts/DefaultLayout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
