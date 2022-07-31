import { MdSearch } from 'react-icons/md';
import search from './Search.module.css';
const Search = () => {
  return (
    <section>
      <div className={search.section}>
        <label for='search' className={search.seachIcon}>
          <MdSearch />
        </label>
        <div className={search.search}>
          <input type="search" name="" id="search" placeholder='Search...' />
        </div>
      </div>
    </section>
  );
};

export default Search;
