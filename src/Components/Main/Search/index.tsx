import './index.scss';
<<<<<<< HEAD
import useModal from '../../../hooks/useModal';
import Modal from '../../Common/Modal';
import Icon from '../../../Components/Common/Icon';
import SearchModal from '../../SearchModal';
=======
import Icon from '../../../Components/Common/Icon';

>>>>>>> 1006392 (✨Feat: 메인페이지 컴포넌트 스타일링)
function Search() {
  const { visible, modalRef, openModal, closeModal } = useModal();

  return (
<<<<<<< HEAD
    <div className="main-header__outer">
      <div
        className="main-header__inner"
        onClick={openModal}>
        <Icon
          className="main-header__icon"
          iconText="search"
        />
      </div>
      <Modal
        visible={visible}
        modalRef={modalRef}
        closeModal={closeModal}>
        <SearchModal />
      </Modal>
=======
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
>>>>>>> 1006392 (✨Feat: 메인페이지 컴포넌트 스타일링)
    </div>
  );
}

export default Search;
