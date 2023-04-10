import { Col, Container, Row } from 'react-bootstrap';
import { useGetProducts } from '../../context/ProductsContext';
import CardForProducts from './CardForProducts';
import StarsFilter from './StarsFilter';

const Products = (): React.ReactElement => {
  const products = useGetProducts();

  return (
    <Container>
      <Row>
        <Col sm={3} style={{ background: 'yellow' }}>
          <StarsFilter />
        </Col>

        <Col>
          {products.map((product) => (
            <CardForProducts key={product.id} product={product} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
