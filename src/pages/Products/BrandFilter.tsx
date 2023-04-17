import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useGetProducts, useSetVisibleProducts } from '../../context/ProductsContext';
import { useEffect, useState } from 'react';

type Brand = { brand: string; id: number };

const BrandFilter = () => {
  const [brandsForFilter, setBrandsForFilter] = useState<Brand[]>([]);
  const [checkedBrands, setCheckedBrands] = useState<string[]>([]);

  const products = useGetProducts();
  const setVisibleProducts = useSetVisibleProducts();

  useEffect(() => {
    const newBrands = products.map((product) => {
      return { brand: product.brand, id: product.id };
    });

    const newBrandUniqueValues = new Map(newBrands.map((brand) => [brand.brand, brand])).values();
    const brandsList = [...newBrandUniqueValues];
    setBrandsForFilter(brandsList);
  }, []);

  const handleBrandFilter = (event: { target: { value: string; checked: boolean } }) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedBrands((prevValue) => [...prevValue, value]);
    } else {
      setCheckedBrands((prevValue) => prevValue.filter((brand) => brand !== value));
    }
  };

  useEffect(() => {
    if (!checkedBrands.length) {
      setVisibleProducts(products);
    } else {
      const newVisibleProdcuts = products.filter((product) =>
        checkedBrands.includes(product.brand)
      );
      setVisibleProducts(newVisibleProdcuts);
    }
  }, [checkedBrands]);

  return (
    <Stack gap={2} style={{ margin: '20px' }}>
      <h6>Marcas:</h6>

      {brandsForFilter.map((brand) => (
        <div key={`brand-list-item-${brand.id}`}>
          <input
            type="checkbox"
            value={brand.brand}
            id={`input-brand-${brand.id}`}
            onChange={handleBrandFilter}
          />
          <label htmlFor={`input-brand-${brand.id}`}>{brand.brand}</label>
        </div>
      ))}
    </Stack>
  );
};

export default BrandFilter;
