import { Router } from 'pages'
// styles and assets
import 'bootstrap/dist/css/bootstrap.min.css'
// components
import { Theme, GlobalStyles } from 'components'

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  )
}

export default App
