"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen)
        return null;
    return (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-primary-foreground w-1/4 h-1/7 p-4 items-center rounded-md flex justify-between">
				<h1>Modale Open!</h1>
				<lucide_react_1.CircleX size={48} onClick={onClose} className="cursor-pointer"/>
			</div>
		</div>);
};
exports.default = Modal;
