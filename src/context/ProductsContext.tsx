/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';
import { ProductType } from '../types/ProductType';
import { getData } from '../utils/getData';

const ProductsContext = React.createContext<ProductType[]>([]);
const SetProductContext = React.createContext({});

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const data = getData();

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <SetProductContext.Provider value={setProducts}>{children}</SetProductContext.Provider>
    </ProductsContext.Provider>
  );
};

const useGetProducts = (): ProductType[] => {
  return useContext(ProductsContext);
};

const useSetProducts = () => {
  return useContext(SetProductContext) as React.Dispatch<React.SetStateAction<ProductType[]>>;
};

export default ProductsProvider;
export { useGetProducts, useSetProducts };
