import CommonComponent from '../common';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal/Modal';
const { Header } = CommonComponent;

function Main() {
  const { openModal, visible, closeModal, modalRef } = useModal();

  return (
    <div>
      <Header />
      MainPage
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
