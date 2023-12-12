import SearchBar from './SearchBar';
import SearchList from './SearchList';
import { useState } from 'react';

export default function SearchModal() {
  const [keyword, setKeyword] = useState<string>('');
  // function fetchTargetLocations(target: string) {
  //   //fetch API
  //   console.log(target);
  // }
  return (
    <div>
      <button>test</button>
      <SearchBar
        value={keyword}
        onChange={setKeyword}
      />

      <SearchList
        keyword={keyword}
        list={keyword}
      />
    </div>
  );
}
