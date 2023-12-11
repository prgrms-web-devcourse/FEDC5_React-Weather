import './index.scss';
import { ModalProps } from '../../../Types/Modal';

export default function Modal({ visible, children, modalRef }: ModalProps) {
  if (!visible) return <></>;

  return (
    <div className="modal__backgroud">
      <div
        className="modal__content"
        ref={modalRef}>
        {children}
      </div>
    </div>
  );
}
