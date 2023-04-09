import React, { useContext } from 'react';
import { ProductType } from '../types/ProductType';

const ProductsContext = React.createContext([]);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const fetchData = sessionStorage.getItem('products') || '[]';
  const data = JSON.parse(fetchData);

  // console.log(data);

  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>;
};

const useGetProducts = (): ProductType[] => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
export { useGetProducts };
