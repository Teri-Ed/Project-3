import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import '../App.css';

const submit = (values) => {
        console.log('Submit Inside Form');
        console.log(values);
}

const MyForm = ({handleSubmit}) => (
        <form className = 'Form' onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor = 'firstName'>First Name</label>
            <br/>
            <br/>
            <Field className = 'FormInput' name = 'firstName' component = 'input' type = 'text' />
        </div>
        <br/>
        <div>
            <label htmlFor = 'lastName'>Last Name</label>
            <br/>
            <br/>
            <Field className = 'FormInput' name = 'lastName' component = 'input' type = 'text' />
        </div>
        <br/>
        <div>
            <label htmlFor = 'email'>Email</label>
            <br/>
            <br/>
            <Field className = 'FormInput' name = 'email' component = 'input' type = 'email' />
        </div>
        <br/>
        <div>
            <label htmlFor = 'comments'>Comments</label>
            <br/>
            <br/>
            <Field className = 'FormInput' name = 'comments' component = 'input' type = 'text' />
        </div>
        <br/>
        <button className = 'FormButton' type = 'submit'>Submit</button>
        </form>
    );

const ContactForm = reduxForm({
  form: 'contact'
})(MyForm)

export default ContactForm;