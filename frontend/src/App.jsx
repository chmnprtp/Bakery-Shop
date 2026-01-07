import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

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
            <p>Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <div key={product.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-4 text-bakery-secondary">
                    <span>Retail: ${product.price.toFixed(2)}</span>
                    <span className="font-semibold text-green-700">Bulk: ${product.bulkPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-sm italic mb-4">Min Order: {product.minOrder} units</p>
                  <button className="w-full bg-bakery-primary text-white py-2 rounded-lg hover:bg-bakery-secondary transition-colors">
                    Add to Bulk Order
                  </button>
                </div>
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
