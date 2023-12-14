import SearchIcon from '../../../Images/searchIcon.svg';
import { SearchBarProps } from '../../../Types/Modal';
import './index.scss';

export default function SearchBar({ value, onChange }: SearchBarProps) {
  function handleChange(keyword: string) {
    onChange(keyword);
  }

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type="text"
        value={value}
        spellCheck={false}
        onChange={(e) => handleChange(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="search-location"
        className="searchBar__icon"
      />
    </div>
  );
}
