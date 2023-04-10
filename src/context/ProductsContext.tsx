/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';
import { ProductType } from '../types/ProductType';
import { getData } from '../utils/getData';

const ProductsContext = React.createContext<ProductType[]>([]);
const SetProductContext = React.createContext({});

const VisibleProductsContext = React.createContext<ProductType[]>([]);
const SetVisibleProductContext = React.createContext({});

const data = getData();

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductType[]>(data);
  const [visibleProducts, setVisibleProducts] = useState(data);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <SetProductContext.Provider value={setProducts}>
        <VisibleProductsContext.Provider value={visibleProducts}>
          <SetVisibleProductContext.Provider value={setVisibleProducts}>
            {children}
          </SetVisibleProductContext.Provider>
        </VisibleProductsContext.Provider>
      </SetProductContext.Provider>
    </ProductsContext.Provider>
  );
};

const useGetProducts = (): ProductType[] => {
  return useContext(ProductsContext);
};

const useSetProducts = () => {
  return useContext(SetProductContext) as React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const useGetVisibleProducts = (): ProductType[] => {
  return useContext(VisibleProductsContext);
};

const useSetVisibleProducts = () => {
  return useContext(SetVisibleProductContext) as React.Dispatch<
    React.SetStateAction<ProductType[]>
  >;
};

export default ProductsProvider;
export { useGetProducts, useSetProducts, useGetVisibleProducts, useSetVisibleProducts };
