import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { FormConfig } from '../types/types';

const FormBuilder: React.FC = () => {
  const initialValues: FormConfig = {
    title: '',
    description: '',
    fields: [
      {
        name: '',
        type: 'text',
        required: false,
      },
    ],
  };

  const validationSchema = Yup.object({
    fields: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Felt navn er påkrevd'),
        type: Yup.string().oneOf(['text', 'email', 'select', 'checkbox'], 'Ugyldig felt type').required('Felt type er påkrevd'),
      })
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form configuration:', values);
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="fields">
            {({ insert, remove, push }) => (
              <div>
                {values.fields.length > 0 &&
                  values.fields.map((field, index) => (
                    <div key={index}>
                      <Field name={`fields.${index}.name`} placeholder="Felt Navn" />
                      <Field as="select" name={`fields.${index}.type`}>
                        <option value="">Velg type</option>
                        <option value="text">Tekst</option>
                        <option value="email">E-post</option>
                        <option value="select">Velg</option>
                        <option value="checkbox">Avmerkingsboks</option>
                      </Field>
                      <Field type="checkbox" name={`fields.${index}.required`} />
                      <button type="button" onClick={() => remove(index)}>Fjern</button>
                    </div>
                  ))}
                <button type="button" onClick={() => push({ name: '', type: 'text', required: false })}>
                  Legg til felt
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Lagre Skjema</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormBuilder;
