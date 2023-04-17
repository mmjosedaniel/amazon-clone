import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import classes from './layout.module.css';
import { useGetProductsInCart } from '../../context/ProductsContext';
import Toaster from '../Toaster';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const productInCart = useGetProductsInCart();
  const amoutOfProductsInCart = productInCart.reduce(
    (amoutOfProductsAcc, productInCart) => amoutOfProductsAcc + productInCart.amount,
    0
  );

  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="">
          <div className={classes['image-container']}>
            <img
              src="https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-reorg3._CB634609711_.png"
              alt="amazon icon"
              width="350"
              height="450"
              className={classes.image}
            />
          </div>
        </Link>

        <SearchBar />

        <nav>
          <ul>
            <li>
              <Link to="cart">Cart: {amoutOfProductsInCart}</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Toaster />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
