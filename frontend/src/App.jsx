import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import { getProducts } from './services/productService';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert(`Added ${product.name} to order! Current items: ${cart.length + 1}`);
  };

  return (
    <div className="min-h-screen p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Bakery B2B Portal</h1>
        <p className="text-xl text-bakery-secondary">Premium Artisan Breads & Pastries for Wholesale</p>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-bakery-primary pb-2">Wholesale Product Catalog</h2>
          {loading ? (
            <p className="text-center py-10">Loading products...</p>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
              Error: {error}
            </div>
          ) : products.length === 0 ? (
            <p className="text-center py-10">No products found. Please add some to the database.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </section>

        <section className="bg-bakery-primary text-white p-8 rounded-2xl shadow-inner">
          <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-bakery-accent rounded-lg">
              <h3 className="font-bold mb-2">Artisan Quality</h3>
              <p className="text-sm">Small batch production using traditional fermentation methods.</p>
            </div>
            <div className="p-4 border border-bakery-accent rounded-lg">
              <h3 className="font-bold mb-2">Sustainable Sourcing</h3>
              <p className="text-sm">Organic, locally sourced grains and dairy for the best flavor.</p>
            </div>
            <div className="p-4 border border-bakery-accent rounded-lg">
              <h3 className="font-bold mb-2">Reliable Delivery</h3>
              <p className="text-sm">Fresh delivery 6 days a week directly to your business.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
