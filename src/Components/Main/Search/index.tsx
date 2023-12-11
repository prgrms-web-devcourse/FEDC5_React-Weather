import './index.scss';
import Icon from '../../../Components/Common/Icon';

function Search() {
  return (
    <div className="main-header-outer">
      <div className="main-header-inner">
        <Icon
          className="main-header-icon"
          iconText="search"
        />
        <input
          className="main-header-input"
          placeholder="지역명을 입력해주세요."
        />
      </div>
    </div>
  );
}

export default Search;
