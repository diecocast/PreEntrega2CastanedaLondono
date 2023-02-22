import Item from './Item';

const ItemList = ({products}) => {
  return (
    <div className="product-grid">
      {products === null ? (
        <div id="contenedor">
          <div className="contenedor-loader">
            <div className="loader"></div>
          </div>
          <div className="cargando">Cargando...</div>
        </div>
      ) : (
        products.map((product) => (
          <Item key={product.id} product = {product}/>
        ))
      )}
    </div>
  );
};

export default ItemList;
