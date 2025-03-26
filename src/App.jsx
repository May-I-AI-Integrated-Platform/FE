import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import './css/common.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat/:chatId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
