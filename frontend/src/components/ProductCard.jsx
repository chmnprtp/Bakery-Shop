import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <div className="flex justify-between items-center mb-4 text-bakery-secondary">
                <span>Retail: ${product.price.toFixed(2)}</span>
                <span className="font-semibold text-green-700">Bulk: ${product.bulkPrice.toFixed(2)}</span>
            </div>
            <p className="text-sm italic mb-4">Min Order: {product.minOrder} units</p>
            {product.category && (
                <span className="inline-block bg-bakery-accent text-bakery-primary text-xs px-2 py-1 rounded-full mb-4">
                    {product.category}
                </span>
            )}
            <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-bakery-primary text-white py-2 rounded-lg hover:opacity-90 transition-opacity active:scale-95 transform cursor-pointer"
            >
                Add to Bulk Order
            </button>
        </div>
    );
};

export default ProductCard;
