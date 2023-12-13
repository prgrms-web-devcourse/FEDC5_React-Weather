import SearchBar from './SearchBar';
import SearchList from './SearchList';
import { useState } from 'react';

export default function SearchModal() {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <div>
      <SearchBar
        value={keyword}
        onChange={setKeyword}
      />
      <SearchList
        target={keyword}
        list={keyword}
      />
    </div>
  );
}
