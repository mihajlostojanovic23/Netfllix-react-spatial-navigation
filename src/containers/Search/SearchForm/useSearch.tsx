import { useContext } from 'react';
import { DataContext } from '../../../context/searchContext';

// Hook
import useDebounce from '../../../hooks/useDebounce';

export default function useSearch() {
  const { setSearch } = useContext(DataContext);
  const debounce = useDebounce();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    debounce(async () => setSearch(value), 300);
  };
  return onChangeHandler;
}
