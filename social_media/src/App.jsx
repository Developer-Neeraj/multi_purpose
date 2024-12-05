import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/account/signup" element={<Signup />} />
          <Route path="/account/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
