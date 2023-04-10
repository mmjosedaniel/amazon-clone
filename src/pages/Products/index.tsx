import { Col, Container, Row } from 'react-bootstrap';
import { useGetVisibleProducts } from '../../context/ProductsContext';
import CardForProducts from './CardForProducts';
import StarsFilter from './StarsFilter';

const Products = (): React.ReactElement => {
  const visibleProducts = useGetVisibleProducts();

  return (
    <Container>
      <Row>
        <Col sm={3} style={{ background: 'yellow' }}>
          <StarsFilter />
        </Col>

        <Col>
          {visibleProducts.map((product) => (
            <CardForProducts key={product.id} product={product} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
