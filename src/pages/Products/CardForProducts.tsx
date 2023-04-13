import { Button, Col, Container, Row } from 'react-bootstrap';
import { ProductType } from '../../types/ProductType';
import { useGetProductsInCart, useSetProductsInCart } from '../../context/ProductsContext';

const CardForProducts = ({ product }: { product: ProductType }) => {
  const { name: productName, price, imageURL, stars } = product;

  const setProductsInCart = useSetProductsInCart();
  const productsInCart = useGetProductsInCart();

  const handleAddProduct = (productToAdd: ProductType) => {
    const isObjectDuplicated = productsInCart
      .map((element) => element.id)
      .includes(productToAdd.id);

    if (isObjectDuplicated) {
      setProductsInCart((prevState) =>
        prevState.map((element) =>
          element.id === productToAdd.id ? { ...element, amount: element.amount + 1 } : element
        )
      );
    } else {
      setProductsInCart((prevState) => [...prevState, { ...product, amount: 1 }]);
    }
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
              <Button onClick={() => handleAddProduct(product)}>Agregar al carrito</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CardForProducts;
