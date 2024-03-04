import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ToastContainer } from 'react-toast'
import { Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
