import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="*" element={<h2>Page not found</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
