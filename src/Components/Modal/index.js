import './Modal.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
	return ReactDOM.createPortal(
		<div className="ModalBackground">{children}</div>,
		document.getElementById('modal')
	);
};

export { Modal };
