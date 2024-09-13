import React from 'react';
import { Product } from '../../types/Product';

interface ProductItemProps {
    product: Product;
    onSelect: (product: Product) => void;
    onDelete: (productId: number) => void;
    isSelected: boolean;
  }
  
  const ProductItem: React.FC<ProductItemProps> = ({ product, onSelect, onDelete, isSelected }) => {
    return (
      <div
        className={`product-item ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(product)}
      >
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <button className="delete-button" onClick={(e) => {
          e.stopPropagation();
          onDelete(product.id);
        }}>Delete</button>
      </div>
    );
  };
  
  export default ProductItem;