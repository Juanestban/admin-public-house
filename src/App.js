import { useMemo } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  ThemeProvider,
  useMediaQuery,
  CssBaseline,
  Container,
} from '@material-ui/core'
import HomePage from './pages/home'
import Navigation from './components/Navigation'
import themeInitial from './config/theme'
import './App.css'

export default function App() {
  const preferenciasDarkModo = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(() => themeInitial, [preferenciasDarkModo])

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <title>public house - ADMIN</title>
        </Helmet>
        <Router>
          <Navigation />
          <Container className="container-material">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}
