export interface ModalProps {
  visible: boolean;
  title?: string;
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDivElement>;
  closeModal: () => void;
}
