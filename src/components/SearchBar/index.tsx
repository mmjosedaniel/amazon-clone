import { SetStateAction, useState } from 'react';
import { useSetProducts, useSetVisibleProducts } from '../../context/ProductsContext';
import { getData } from '../../utils/getData';
import classes from './search-bar.module.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const products = getData();
  const setProducts = useSetProducts();
  const setVisibleProducts = useSetVisibleProducts();

  const handleSearchImput = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(event.target.value);
  };

  const handleFindProducts = () => {
    const newProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setProducts(newProducts);
    setVisibleProducts(newProducts);
  };

  return (
    <div className={classes['search-bar']}>
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        className={classes['search-input']}
        onChange={handleSearchImput}
      />

      <div>
        <button className={classes['search-button']} type="button" onClick={handleFindProducts}>
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
