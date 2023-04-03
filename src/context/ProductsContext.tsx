import React, { useContext } from 'react';

const ProductsContext = React.createContext([]);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const fetchData = sessionStorage.getItem('products') || '[]';
  const data = JSON.parse(fetchData);

  // console.log(data);

  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>;
};

const useGetProducts = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
export { useGetProducts };
