import { Col, Container, Row } from 'react-bootstrap';
import { useGetProducts } from '../../context/ProductsContext';
import CardForProducts from './CardForProducts';

const Products = (): React.ReactElement => {
  const products = useGetProducts();

  return (
    <Container>
      <Row>
        <Col sm={3} style={{ background: 'yellow' }}>
          Col 1
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
