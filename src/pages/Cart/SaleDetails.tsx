import { Col, Container, Row } from 'react-bootstrap';
import { ProductType } from '../../types/ProductType';

const SaleDetails = ({ productsInCart }: { productsInCart: ProductType[] }) => {
  const [amoutOfProducts, totalPrice] = productsInCart.reduce(
    ([amoutOfProducts, totalPrice], currentValue) => [
      amoutOfProducts + currentValue.amount,
      totalPrice + currentValue.amount * currentValue.price
    ],
    [0, 0]
  );
  return (
    <Container>
      <Row>
        <Col>
          <p>
            Subtotal(
            {amoutOfProducts === 1 ? `${amoutOfProducts} producto` : `${amoutOfProducts} productos`}
            ): <strong>US${totalPrice}</strong>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SaleDetails;
