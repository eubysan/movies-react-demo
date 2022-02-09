import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

export function Search() {
  const [query, setQuery] = useSearchParams();
  const search = query.get('search');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action='' className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type='text'
          value={search ?? ''}
          placeholder='Title'
          aria-label='Search Movies'
          autoFocus
          onChange={(e) => {
            const value = e.target.value;
            setQuery({ search: value });
          }}
        />
        <FaSearch size={20} className={styles.searchButton} />
      </div>
    </form>
  );
}
