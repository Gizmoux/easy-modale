"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const Modal = ({ isOpen, onClose }) => {
    const handleCloseModale = () => {
        onClose();
    };
    const [modalIsOpen, setModalIsOpen] = (0, react_1.useState)(false);
    return (<div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-primary-foreground w-1/4 h-1/7 p-4 items-center rounded-md flex justify-between">
				<h1>Modale Open!</h1>
				<lucide_react_1.CircleX size={48} onClick={handleCloseModale} className="cursor-pointer"/>
			</div>
			{modalIsOpen && (<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}/>)}
		</div>);
};
exports.default = Modal;
