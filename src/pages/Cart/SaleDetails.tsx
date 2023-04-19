import { Button, Col, Container, Row } from 'react-bootstrap';
import { ProductType } from '../../types/ProductType';
import { useSetProductsInCart, useSetShowToaster } from '../../context/ProductsContext';
import { useNavigate } from 'react-router-dom';

const SaleDetails = ({ productsInCart }: { productsInCart: ProductType[] }) => {
  const navigate = useNavigate();
  const setProductsInCart = useSetProductsInCart();

  const [amoutOfProducts, totalPrice] = productsInCart.reduce(
    ([amoutOfProducts, totalPrice], currentValue) => [
      amoutOfProducts + currentValue.amount,
      totalPrice + currentValue.amount * currentValue.price
    ],
    [0, 0]
  );

  const setShowToaster = useSetShowToaster();

  const handlePayAction = () => {
    setProductsInCart([]);
    navigate('/');
    setShowToaster({ show: true, message: 'La compra fue hecha satisfactoriamente' });
  };

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

      <Row>
        <Col>
          <Button onClick={handlePayAction}>Proceder al pago</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SaleDetails;
