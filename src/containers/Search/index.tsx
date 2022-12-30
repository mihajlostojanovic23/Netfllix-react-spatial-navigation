import React from 'react';
import SearchForm from './SearchForm';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const FocusableSearchForm = withFocusable()(SearchForm);

function Search() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center text-[40px] text-[white]">
      Search
      <FocusableSearchForm focusKey={'SearchForm'} />
    </div>
  );
}

export default Search;
