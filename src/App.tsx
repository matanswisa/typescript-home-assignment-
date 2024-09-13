import React, { useEffect, useState } from 'react';
import { Product } from './types/Product';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Header from './components/Header/Header';
import initialProducts from './data/productList';
import './App.css';


const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('products');
    return (savedProducts != '[]' && savedProducts!.length > 0 ) ? JSON.parse(savedProducts!) : initialProducts;
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isNewProduct, setIsNewProduct] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 5;

  const handleSelectProduct = (product: Product) => {
    console.log("Selected producit",product)
    setSelectedProduct(product);
    setIsNewProduct(false);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter((product) => product.id !== productId));
    setSelectedProduct(null);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    if (isNewProduct) {
      setProducts([...products, updatedProduct]);
    } else {
      const updatedProducts = products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      setProducts(updatedProducts);
    }
    setSelectedProduct(updatedProduct);
    setIsNewProduct(false);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleAddProduct = () => {
    setSelectedProduct({
      id: Date.now(),
      name: '',
      description: '',
      price: 0,
      creationDate: new Date(),
      imageUrl: '',
    });
    setIsNewProduct(true);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const currentProducts = filteredProducts.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="app-container">
      <Header onAdd={handleAddProduct}  onSearch={handleSearch} />
      <div className="content">
      <ProductList
          products={currentProducts}
          onSelect={handleSelectProduct}
          onDelete={handleDeleteProduct}
          selectedProduct={selectedProduct}
        />
        {selectedProduct && <ProductDetails product={selectedProduct} onSave={handleUpdateProduct}  isNew={isNewProduct}/>}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev Page
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default App;