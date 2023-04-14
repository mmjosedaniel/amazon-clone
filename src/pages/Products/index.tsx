import { Col, Container, Row } from 'react-bootstrap';
import { useGetProductsInCart, useGetVisibleProducts } from '../../context/ProductsContext';
import CardForProducts from './CardForProducts';
import StarsFilter from './StarsFilter';
import BrandFilter from './BrandFilter';

const Products = (): React.ReactElement => {
  const visibleProducts = useGetVisibleProducts();

  return (
    <Container>
      <Row>
        <Col sm={3}>
          <StarsFilter />

          <BrandFilter />
        </Col>

        <Col>
          {visibleProducts.map((product) => (
            <CardForProducts key={`product-card-${product.id}`} product={product} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
