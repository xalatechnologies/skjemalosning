import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/ContactForm.scss';

const ContactForm: React.FC = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Navn er påkrevd'),
    email: Yup.string().email('Ugyldig e-postadresse').required('E-post er påkrevd'),
    message: Yup.string().required('Melding er påkrevd')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form data:', values);
      }}
    >
      <Form className="contact-form">
        <div className="contact-form__field">
          <label htmlFor="name">Navn</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="contact-form__error" />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">E-post</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="contact-form__error" />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">Melding</label>
          <Field name="message" as="textarea" />
          <ErrorMessage name="message" component="div" className="contact-form__error" />
        </div>

        <button type="submit" className="contact-form__submit">Send melding</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
