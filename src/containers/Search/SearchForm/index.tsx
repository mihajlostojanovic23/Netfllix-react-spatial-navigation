import React, { useContext, useEffect, useRef } from 'react';
import { DataContext } from '../../../context/searchContext';
import useSearch from './useSearch';

function SearchForm({ focused }: any) {
  const inputRef = useRef<any>(null);
  const { search } = useContext(DataContext);

  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [focused, search]);

  const handle = useSearch();

  return (
    <div>
      <div className={`my-[30px]`}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="h-[70px] w-[700px] rounded-[10px] px-[10px] text-[25px] text-[black]"
          onChange={handle}
        />
      </div>
      <div className="results absolute pt-[20px]">
        {search && <span>Search value is: {search}</span>}
      </div>
    </div>
  );
}

export default SearchForm;
