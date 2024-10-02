import React from 'react';
import { CircleX } from 'lucide-react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	className?: string;
	overlayClassName?: string;
	contentClassName?: string;
	closeIconClassName?: string;
	children?: any;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	className = '',
	overlayClassName = '',
	contentClassName = '',
	closeIconClassName = '',
	children,
}) => {
	if (!isOpen) return null;

	return (
		<div className={`${overlayClassName} ${className}`}>
			<div className={contentClassName}>
				{children}
				<CircleX size={48} onClick={onClose} className={closeIconClassName} />
			</div>
		</div>
	);
};

export default Modal;
