import React, { Component } from 'react';
import styles from './index.css';

export default class Input extends Component {

    render() {
        let {children, ...props} = this.props;

        return (
            <div className={styles["form-group"]}>
                <input {...props} className={styles["form-control"]} required />
                <label className={styles["form-control-placeholder"]} >{children}</label>
            </div>
        )
    }
    
};
