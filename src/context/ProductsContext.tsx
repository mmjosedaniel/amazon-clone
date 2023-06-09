/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';
import { ProductType } from '../types/ProductType';
import { getData } from '../utils/getData';
import { ShowToasteType } from '../types/ShowToasterType';

const ProductsContext = React.createContext<ProductType[]>([]);
const SetProductContext = React.createContext({});

const VisibleProductsContext = React.createContext<ProductType[]>([]);
const SetVisibleProductContext = React.createContext({});

const ProductsInCartContext = React.createContext<ProductType[]>([]);
const SetProductsInCartContext = React.createContext({});

const ShowToasterContext = React.createContext<ShowToasteType>({ show: false, message: '' });
const SetShowToasterContext = React.createContext({});

const data = getData();

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductType[]>(data);
  const [visibleProducts, setVisibleProducts] = useState(data);

  const [productsInCart, setProductsInCart] = useState<ProductType[]>([]);

  const [showToaster, setShowToaster] = useState<ShowToasteType>({ show: false, message: '' });

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <SetProductContext.Provider value={setProducts}>
        <VisibleProductsContext.Provider value={visibleProducts}>
          <SetVisibleProductContext.Provider value={setVisibleProducts}>
            <ProductsInCartContext.Provider value={productsInCart}>
              <SetProductsInCartContext.Provider value={setProductsInCart}>
                <ShowToasterContext.Provider value={showToaster}>
                  <SetShowToasterContext.Provider value={setShowToaster}>
                    {children}
                  </SetShowToasterContext.Provider>
                </ShowToasterContext.Provider>
              </SetProductsInCartContext.Provider>
            </ProductsInCartContext.Provider>
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

const useGetProductsInCart = (): ProductType[] => {
  return useContext(ProductsInCartContext);
};

const useSetProductsInCart = () => {
  return useContext(SetProductsInCartContext) as React.Dispatch<
    React.SetStateAction<ProductType[]>
  >;
};

const useGetShowToaster = (): ShowToasteType => {
  return useContext(ShowToasterContext);
};

const useSetShowToaster = () => {
  return useContext(SetShowToasterContext) as React.Dispatch<React.SetStateAction<ShowToasteType>>;
};

export default ProductsProvider;
export {
  useGetProducts,
  useSetProducts,
  useGetVisibleProducts,
  useSetVisibleProducts,
  useGetProductsInCart,
  useSetProductsInCart,
  useGetShowToaster,
  useSetShowToaster
};
