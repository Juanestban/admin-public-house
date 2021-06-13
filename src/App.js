import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import './App.css'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>public house - ADMIN</title>
      </Helmet>
      <Router>
        {/* navegacion */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  )
}
