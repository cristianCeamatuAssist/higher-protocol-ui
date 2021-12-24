import { Router } from 'pages'
// styles and assets
import 'bootstrap/dist/css/bootstrap.min.css'
// components
import { Theme } from 'components'

const App = () => {
  return (
    <Theme>
      <Router />
    </Theme>
  )
}

export default App
