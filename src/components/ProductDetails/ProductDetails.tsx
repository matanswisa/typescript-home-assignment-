import React, { useState, useEffect } from 'react';
import { Product } from '../../types/Product';
import './ProductDetails.css';

interface ProductDetailsProps {
    product: Product;
    onSave: (product: Product) => void;
    isNew: boolean;
  }
  
  const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onSave }) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description || '');
    const [price, setPrice] = useState(product.price);
    const [imageUrl, setImageUrl] = useState(product.imageUrl || '');
    const [errors, setErrors] = useState<{ name?: string; price?: string; imageUrl?: string }>({});
    
    const validate = () => {
      const newErrors: { name?: string; price?: string; imageUrl?: string } = {};
  
      if (!name) {
        newErrors.name = 'Name is required';
      }
  
      if (price <= 0) {
        newErrors.price = 'Price must be greater than 0';
      }
  
      if (imageUrl && !isValidUrl(imageUrl)) {
        newErrors.imageUrl = 'Invalid URL for image';
      }
  
      setErrors(newErrors);
  
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSave = () => {
      if (validate()) {
        const updatedProduct: Product = {
          ...product,
          name,
          description,
          price,
          imageUrl,
        };
        onSave(updatedProduct);
      }
    };
  
    const isValidUrl = (url: string) => {
      try {
        new URL(url);
        return true;
      } catch (error) {
        return false;
      }
    };
  
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
  
    useEffect(() => {
      setName(product.name);
      setDescription(product.description || '');
      setPrice(product.price);
      setImageUrl(product.imageUrl || '');
    }, [product]);
  
    return (
      <div className="product-details">
        {imageUrl && <img src={imageUrl} alt={name} className="product-image" />}
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        {errors.price && <p className="error">{errors.price}</p>}
        
        <label>Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {errors.imageUrl && <p className="error">{errors.imageUrl}</p>}
        

        <button onClick={handleSave}>
          Save
        </button>
      </div>
    );
  };
  
  export default ProductDetails;