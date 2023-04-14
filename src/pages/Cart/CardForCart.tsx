import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ProductType } from '../../types/ProductType';
import { useSetProductsInCart } from '../../context/ProductsContext';

const CardForCart = ({ product }: { product: ProductType }) => {
  const { name: productName, price, imageURL, amount, id: productId } = product;

  const setProductsInCart = useSetProductsInCart();

  const handleChangeAmoutOfProductsInCart = (event: { target: { value: string } }) => {
    setProductsInCart((prevState) =>
      prevState.map((element) =>
        element.id === productId ? { ...product, amount: +event.target.value } : element
      )
    );
  };

  const handleRemoveProductFroCard = (productId: number) => {
    setProductsInCart((prevState) =>
      prevState.filter((productInCart) => productInCart.id !== productId)
    );
  };

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

            <Col sm={2}>
              <p>
                US$
                {` ${price}`}
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm={2}>
              <Form.Select
                aria-label="Default select example"
                size="sm"
                defaultValue={amount}
                onChange={handleChangeAmoutOfProductsInCart}>
                <option value="1">cant: 1</option>
                <option value="2">cant: 2</option>
                <option value="3">cant: 3</option>
                <option value="4">cant: 4</option>
                <option value="5">cant: 5</option>
                <option value="6">cant: 6</option>
                <option value="7">cant: 7</option>
                <option value="8">cant: 8</option>
                <option value="9">cant: 9</option>
                <option value="10">cant: 10</option>
              </Form.Select>
            </Col>

            <Col>
              <Button onClick={() => handleRemoveProductFroCard(productId)}>Eliminar</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CardForCart;
