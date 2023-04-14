import { Container, Row, Col } from 'react-bootstrap';
import { useGetProductsInCart } from '../../context/ProductsContext';
import CardForCart from './CardForCart';
import SaleDetails from './SaleDetails';

const Cart = (): React.ReactElement => {
  const productsInCart = useGetProductsInCart();

  return (
    <Container>
      <Row>
        <Col>
          {productsInCart.map((product) => (
            <CardForCart key={`product-card-in-Cart-${product.id}`} product={product} />
          ))}
        </Col>

        <Col sm={3} style={{ background: 'yellow' }}>
          <SaleDetails productsInCart={productsInCart} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
