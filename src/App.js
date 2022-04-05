import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css';


function App() {
    return (
      <div>
        <Routes>
          <Route path='/*' element={<Posts />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    )

}

export default App;