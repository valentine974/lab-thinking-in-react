import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable'

import { useState } from 'react';

import jsonData from '../data.json'

function ProductsPage () {


  const [products, setProducts] = useState(jsonData);
  const [filterStock, setFilterStock] = useState(false);
  const copyProducts = [...products]

  function searchProducts (keyword) {  
    const filteredProducts = copyProducts.slice().filter((product)=>{ return product.name.slice(0,keyword.length).toLowerCase() === keyword.toLowerCase() }) 
    setProducts(filteredProducts)

  }


  function showInStockProduct (value) {  
    let filterChecked = value  
    setFilterStock(filterChecked) 
  }
  
 

  return (
  <div className="pageProduct"> 
    <h1>IronStore</h1>
    <SearchBar search={searchProducts} filter={showInStockProduct}/>
    <ProductTable products={products} filterState={filterStock}/>
  </div>
  );
}
export default ProductsPage;