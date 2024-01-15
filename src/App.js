import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Products from './ProductList';
import Products from './ProductList';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
         <Route path='/ProductList' element={<Products/>} />   
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
