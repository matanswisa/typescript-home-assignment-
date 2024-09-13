import React from 'react';
import { Product } from '../../types/Product';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

interface ProductListProps {
    products: Product[];
    onSelect: (product: Product) => void;
    onDelete: (productId: number) => void;
  }
  
  interface ProductListProps {
    products: Product[];
    onSelect: (product: Product) => void;
    onDelete: (productId: number) => void;
    selectedProduct: Product | null;
  }
  
  const ProductList: React.FC<ProductListProps> = ({ products, onSelect, onDelete, selectedProduct }) => {
    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onSelect={onSelect}
            onDelete={onDelete}
            isSelected={selectedProduct !== null && selectedProduct.id === product.id}
          />
        ))}
        </div>
    );
  };
  
  export default ProductList;