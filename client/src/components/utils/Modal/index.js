import React from 'react';
import styles from './index.css';

const Modal = ({children}) => (
    <div className={styles.Modal}>
        <div className={styles.ModalBody}>
            <div className={styles.ModalHeader}>Post a job to the board</div>
            <div className={styles.ModalContent}>{children}</div>
        </div>
    </div>
);

export default Modal;