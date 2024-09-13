import React from 'react';
import './Header.css';


interface HeaderProps {
    onAdd: () => void;
    onSearch: (term: string) => void; 
  }
  
  const Header: React.FC<HeaderProps> = ({ onAdd, onSearch }) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    };
  
    return (
      <header className="header">
        <h1>My Store</h1>
        <button className="add-button" onClick={onAdd}>+ Add</button>
        <input 
          type="text" 
          placeholder="Search products" 
          className="search-bar" 
          onChange={handleSearchChange}  // Handle search input changes
        />
      </header>
    );
  };
export default Header;
