import classes from './search-bar.module.css';

const SearchBar = () => {
  return (
    <div className={classes['search-bar']}>
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        className={classes['search-input']}
      />
      <div>
        <button className={classes['search-button']} type="button">
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
