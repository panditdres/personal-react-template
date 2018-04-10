import React from 'react';

const FieldLabel = ({title, children}) => (
    <div style={{paddingBottom: '20px'}}>
        <div style={{fontSize: '15px', paddingBottom: '10px'}}>{title}</div>
        {children}
    </div>
);

export default FieldLabel;
