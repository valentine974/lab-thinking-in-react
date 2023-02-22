function ProductRow (props) {
    return (
    <tr className="productRow "  > 
    <td className={props.product.inStock? 'black':'red'}>{props.product.name}</td>
    <td>{props.product.price}</td>

    </tr>
    );
  }
  export default ProductRow;