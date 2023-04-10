import { Button, Col, Container, Row } from 'react-bootstrap';
import { useGetProducts, useSetVisibleProducts } from '../../context/ProductsContext';

const StarsFilter = () => {
  const products = useGetProducts();
  const setVisibleProducts = useSetVisibleProducts();

  const handleFilterByStars = (stars: number) => {
    const newVisibleProducts = products.filter((product) => product.stars >= stars);
    setVisibleProducts(newVisibleProducts);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(5)}>
            5 estrellas o más
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(4)}>
            4 estrellas o más
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(3)}>
            3 estrellas o más
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(2)}>
            2 estrellas o más
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(1)}>
            1 estrellas o más
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default StarsFilter;
