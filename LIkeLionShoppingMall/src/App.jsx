import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Signup } from './pages/Signup';
import { Layout } from './component/layout/Layout';
import './index.css';

function App() {

  return (
    <>
        <Routes>
          <Route>
            <Route path='/' element={<Layout />}>
              <Route index element={<Main />}/>
              <Route path='/Signup' element={<Signup />}/>
              <Route/>
            </Route>
          </Route>
        </Routes>
    </>
  )
}

export default App
