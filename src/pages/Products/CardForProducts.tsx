import { Button, Col, Container, Row } from 'react-bootstrap';
import { ProductType } from '../../types/ProductType';

const CardForProducts = ({
  product: { name: productName, price, imageURL, stars }
}: {
  product: ProductType;
}) => {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <img src={imageURL} width="150" />
        </Col>

        <Col>
          <Row>
            <Col>
              <p>{productName}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>Stars: {stars}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                <span>US$</span>
                {` ${price}`}
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button>Agregar al carrito</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CardForProducts;
