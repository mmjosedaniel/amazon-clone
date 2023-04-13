import { Button, Col, Container, Row } from 'react-bootstrap';
import { useGetProducts, useSetVisibleProducts } from '../../context/ProductsContext';
import { useEffect, useState } from 'react';

type Brand = { brand: string; id: number };

const BrandFilter = () => {
  const [brandsForFilter, setBrandsForFilter] = useState<Brand[]>([]);
  const [checkedBrands, setCheckedBrands] = useState<string[]>([]);

  const products = useGetProducts();
  const setVisibleProducts = useSetVisibleProducts();

  useEffect(() => {
    console.log({ products });
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
    console.log(!checkedBrands.length);
  }, [checkedBrands]);

  return (
    <Container>
      <Row>
        <Col>
          <ul>
            {brandsForFilter.map((brand) => (
              <li key={brand.id}>
                <input
                  type="checkbox"
                  value={brand.brand}
                  id={`${brand.id}`}
                  onChange={handleBrandFilter}
                />
                <label htmlFor={`${brand.id}`}>{brand.brand}</label>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default BrandFilter;
