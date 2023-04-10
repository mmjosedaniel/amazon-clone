import { Button, Col, Container, Row } from 'react-bootstrap';

const StarsFilter = () => {
  const handleFilterByStars = (stars: number) => {
    console.log(stars);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(5)}>
            5 estrellas
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(4)}>
            4 estrellas
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(3)}>
            3 estrellas
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(2)}>
            2 estrellas
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="button" onClick={() => handleFilterByStars(1)}>
            1 estrellas
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default StarsFilter;
