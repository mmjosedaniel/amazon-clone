import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useGetProducts, useSetVisibleProducts } from '../../context/ProductsContext';

const StarsFilter = () => {
  const products = useGetProducts();
  const setVisibleProducts = useSetVisibleProducts();

  const handleFilterByStars = (stars: number) => {
    const newVisibleProducts = products.filter((product) => product.stars >= stars);
    setVisibleProducts(newVisibleProducts);
  };

  return (
    <Stack gap={3} style={{ margin: '20px' }}>
      <h6>Reseña del cliente:</h6>

      <div>
        <Button type="button" variant="light" onClick={() => handleFilterByStars(5)}>
          5 estrellas o más
        </Button>
      </div>

      <div>
        <Button type="button" variant="light" onClick={() => handleFilterByStars(4)}>
          4 estrellas o más
        </Button>
      </div>

      <div>
        <Button type="button" variant="light" onClick={() => handleFilterByStars(3)}>
          3 estrellas o más
        </Button>
      </div>

      <div>
        <Button type="button" variant="light" onClick={() => handleFilterByStars(2)}>
          2 estrellas o más
        </Button>
      </div>

      <div>
        <Button type="button" variant="light" onClick={() => handleFilterByStars(1)}>
          1 estrellas o más
        </Button>
      </div>
    </Stack>
  );
};

export default StarsFilter;
