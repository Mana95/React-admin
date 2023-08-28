import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './views/NotFound';
import ProductDetails from './components/ProductDetails';
import { Suspense } from 'react';
import Register from './components/Access/Register';
import Login from './components/Access/Login';
import CreateMembership from './views/Memberships/CreateMembership';
import Membershiptable from './views/Memberships/Membershiptable';
import Viewmembership from './views/Memberships/Viewmember';



const App = ()=> {

  return (
    <>
    <Suspense fallback={<div className="container">Loading...</div>}>
    <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/new-membership" element={<CreateMembership />} />
          <Route path="/membertable" element={<Membershiptable />} />
          <Route path="/viewmember" element={<Viewmembership />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
