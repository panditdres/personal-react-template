import React from 'react';
import styles from './Button.css';

const Button = ({
    backgroundColor = '#6463ef',
    color = 'white',
    ...props
}) => (
    <button {...props} style={{
        borderRadius: '4px',
        fontWeight: 'bold',
        minHeight: '45px',
        fontSize: '16px',
        border: 'none',
        backgroundColor,
        color,
        padding: '13px 24px'
    }}>
        {props.children}
    </button>
);


Button.Row = (props) => (
    <div {...props} className={styles.Row}>
        {props.children}
    </div>
);


export default Button;