"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const Modal = ({ isOpen, onClose, className = '', overlayClassName = '', contentClassName = '', closeIconClassName = '', children, }) => {
    if (!isOpen)
        return null;
    return (<div className={`${overlayClassName} ${className}`}>
			<div className={contentClassName}>
				{children}
				<lucide_react_1.CircleX size={48} onClick={onClose} className={closeIconClassName}/>
			</div>
		</div>);
};
exports.default = Modal;
