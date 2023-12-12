import useModal from '../Hooks/useModal';
import Modal from '../Components/Common/Modal';
import MainPage from '../Components/Main';

function Main() {
  const { visible, modalRef, openModal, closeModal } = useModal();

  return (
    <div>
      <MainPage />
      <button onClick={openModal}>modal open!</button>
      <Modal
        visible={visible}
        modalRef={modalRef}
        closeModal={closeModal}>
        내부에 들어가는 Component!
      </Modal>
    </div>
  );
}
export default Main;
