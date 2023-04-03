import { useGetProducts } from '../../context/ProductsContext';

const Products = (): React.ReactElement => {
  const products = useGetProducts();

  console.log(products);

  return (
    <div>
      <h2>This is my Products component</h2>
    </div>
  );
};

export default Products;
