import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    overlayClassName?: string;
    contentClassName?: string;
    closeIconClassName?: string;
    children?: any;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
