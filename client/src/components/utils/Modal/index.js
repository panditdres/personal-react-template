import React from 'react';
import styles from './index.css';
import ReactDOM from 'react-dom';

let Modal = ({children, onClose}) => ReactDOM.createPortal((
    <div className={styles.Modal}>
        <div className={styles.ModalBody}>
            <div className={styles.ModalHeader}>
                Edit Information
                <img alt="" className={styles.closeBtn} onClick={onClose} src={Close}/>
            </div>
            <div className={styles.ModalContent}>{children}</div>
        </div>
    </div>
),document.getElementById('modal-root'))
export default Modal;