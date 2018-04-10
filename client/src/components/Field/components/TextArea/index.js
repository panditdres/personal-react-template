import React from 'react';
import RichTextEditor from 'react-rte/lib/SimpleRichTextEditor';

const TextArea = (props) => (
    <RichTextEditor  value={props.value || ""} {...props}  />
);

export default TextArea;