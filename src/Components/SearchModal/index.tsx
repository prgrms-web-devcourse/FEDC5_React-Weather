import SearchBar from './SearchBar';
import SearchList from './SearchList';
import { useState } from 'react';
function SearchModal() {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <div>
      <SearchBar
        value={keyword}
        onChange={setKeyword}
      />
      <SearchList />
    </div>
  );
}

export default SearchModal;
