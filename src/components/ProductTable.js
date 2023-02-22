import ProductRow from './ProductRow.js';

function ProductsTable(props) {
  return (
    <div className="tableProduct">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody> 
                { props.filterState?
                 props.products.map((product)=>{return product.inStock && <ProductRow key={product.id} product={product} /> })
                 : props.products.map((product)=>{return  <ProductRow key={product.id} product={product} /> })

                }
                 
        </tbody>
      </table>
    </div>
  );
}
export default ProductsTable;
