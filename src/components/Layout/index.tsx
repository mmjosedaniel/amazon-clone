import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import classes from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes['image-container']}>
          <img
            src="https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-reorg3._CB634609711_.png"
            alt="amazon icon"
            width="350"
            height="450"
            className={classes.image}
          />
        </div>

        <SearchBar />

        <nav>
          <ul>
            <li>
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
