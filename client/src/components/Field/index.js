/*
  A wrapper for redux-form Field.
  Given a component is passed to Field.component, `props.input` is deconstructed into `props`
  http://redux-form.com/6.2.1/docs/api/Field.md/#props 
*/

import React, { Component } from 'react';
import {Field as ReduxFormField} from 'redux-form';

const isString = value => typeof value === "string";

export const bindInput = Component => ({input, ...props}) => (
    <div>
        {props.meta.error && <p style={{color: 'tomato', fontSize: '0.8em'}}>{props.meta.error}</p>}
        <Component  {...input} {...props} />
    </div>
);

class Field extends Component {
    componentWillMount() {
        const {component} = this.props;
        this.field = isString(component) ? component : bindInput(component);
    }
    render() {
        return (
            <ReduxFormField {...this.props}
                component={this.field} />
        );
    }
}

export default Field;