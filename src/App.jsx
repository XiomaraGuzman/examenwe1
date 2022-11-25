import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/helpers/Header'
import Main from '../src/componentes/layout/Main'
import Footer from './componentes/helpers/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
