import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import FlowEditor from './components/FlowEditor';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f1f5f9' }}>
      <ProductList products={products} onSelect={handleProductSelect} />
      <FlowEditor selectedProducts={selectedProducts} />
    </div>
  );
}

export default App;
