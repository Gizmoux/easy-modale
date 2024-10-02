"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lucide_react_1 = require("lucide-react");
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.overlayClassName, overlayClassName = _c === void 0 ? '' : _c, _d = _a.contentClassName, contentClassName = _d === void 0 ? '' : _d, _e = _a.closeIconClassName, closeIconClassName = _e === void 0 ? '' : _e, children = _a.children;
    if (!isOpen)
        return null;
    return (react_1.default.createElement("div", { className: "".concat(overlayClassName, " ").concat(className) },
        react_1.default.createElement("div", { className: contentClassName },
            children,
            react_1.default.createElement(lucide_react_1.CircleX, { size: 48, onClick: onClose, className: closeIconClassName }))));
};
exports.default = Modal;
