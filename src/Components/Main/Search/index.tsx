import './index.scss';
import useModal from '../../../hooks/useModal';
import Modal from '../../Common/Modal';
import Icon from '../../../Components/Common/Icon';
import SearchModal from '../../SearchModal';
function Search() {
  const { visible, modalRef, openModal, closeModal } = useModal();

  return (
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
    </div>
  );
}

export default Search;
