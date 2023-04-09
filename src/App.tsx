import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import ProductsProvider from './context/ProductsContext';

function App() {
  return (
    <ProductsProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </ProductsProvider>
  );
}

export default App;
