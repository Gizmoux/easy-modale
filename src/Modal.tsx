import React, { useState } from 'react';
import { CircleX } from 'lucide-react';
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const handleCloseModale = () => {
		onClose();
	};
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-primary-foreground w-1/4 h-1/7 p-4 items-center rounded-md flex justify-between">
				<h1>Modale Open!</h1>
				<CircleX
					size={48}
					onClick={handleCloseModale}
					className="cursor-pointer"
				/>
			</div>
			{modalIsOpen && (
				<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
			)}
		</div>
	);
};

export default Modal;
