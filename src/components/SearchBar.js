

function SearchBar(props) {



  return (
    <div className="searchBar">
      <form >
        <label htmlFor="search">Search</label>
        {/* <input id="search" type="text" onChange={(e)=> console.log(e.target.value)}/> */}
        <input id="search" type="text" onChange={(e)=>props.search(e.target.value)}/>
        <br/>

        <input id="productStock" type="checkbox" onChange={(e)=>props.filter(e.target.checked)}/>
        {/* <input id="productStock" type="checkbox" onChange={(e)=>console.log(e.target.checked)}/> */}
        <label htmlFor="productStock">Only show products in stock</label>
      </form>

    </div>
  );
}
export default SearchBar;
