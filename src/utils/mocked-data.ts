type ProductType = {
  id: number;
  price: number;
  name: string;
  stars: number;
  brand: string;
  imageURL: string;
};

const products: ProductType[] = [
  {
    id: 1,
    price: 129,
    name: 'One Pice Battle',
    stars: 5,
    brand: 'Konamy',
    imageURL: ''
  },
  {
    id: 2,
    price: 27,
    name: 'Battletoads',
    stars: 3,
    brand: 'Electronic Arts',
    imageURL: ''
  },
  {
    id: 3,
    price: 129,
    name: 'Play Station 5',
    stars: 4,
    brand: 'Sony',
    imageURL: ''
  },
  {
    id: 4,
    price: 129,
    name: 'Dragon Ball',
    stars: 2,
    brand: 'Konamy',
    imageURL: ''
  }
];

export default products;
