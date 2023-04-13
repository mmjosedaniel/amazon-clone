import { Button, Col, Container, Row } from 'react-bootstrap';
import { useGetProducts, useSetVisibleProducts } from '../../context/ProductsContext';
import { useEffect, useState } from 'react';

type Brand = { brand: string; id: number };

const BrandFilter = () => {
  const [brandsForFilter, setBrandsForFilter] = useState<Brand[]>([]);

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

  const handleBrandFilter = (brand: string) => {
    const newVisibleProdcuts = products.filter((product) => product.brand === brand);

    setVisibleProducts(newVisibleProdcuts);
  };

  return (
    <Container>
      <Row>
        <Col>
          <ul>
            {brandsForFilter.map((brand) => (
              <li key={brand.id}>
                <Button onClick={() => handleBrandFilter(brand.brand)}>{brand.brand}</Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default BrandFilter;
