import { ProductType } from '../types/ProductType';

const getData = (): ProductType[] => {
  const fetchData = sessionStorage.getItem('products') || '[]';
  const data = JSON.parse(fetchData);
  return data;
};

export { getData };
