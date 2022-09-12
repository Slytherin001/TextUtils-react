import { useState } from 'react'
import './App.css'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const [modeBtn, setModeBtn] = useState('Enable dark mode')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      setModeBtn('Enable light mode')
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils - Dark mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setModeBtn('Enable dark mode')
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils - Light mode'
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        modeBtn={modeBtn}
      />
      <Alert alert={alert} />
      <div className="container mt-5">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter your Text to analyze below"
          mode={mode}
        />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
