import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';    
import { ScreenCreateEmploye } from './screens/ScreenCreateEmploye'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-app">
    <ScreenCreateEmploye />
    </div>
  )
}

export default App
