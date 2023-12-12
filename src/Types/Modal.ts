import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDivElement>;
  closeModal: () => void;
}

export interface SearchBarProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}
