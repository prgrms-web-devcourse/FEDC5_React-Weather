type Props = {
  visible: boolean;
  title?: string;
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDivElement>;
  closeModal: () => void;
};
import './Modal.scss';
export default function Modal({ visible, children, modalRef }: Props) {
  if (!visible) return <></>;

  return (
    <div className="modal">
      <div className="modal__backgroud">
        <div
          className="modal__content"
          ref={modalRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
