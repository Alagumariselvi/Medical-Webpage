import './App.css';
import Home from './home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Home/>}>

    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
