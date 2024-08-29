import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormConfig } from '../types/types';

interface FormViewerProps {
  formConfig: FormConfig;
}

const FormViewer: React.FC<FormViewerProps> = ({ formConfig }) => {
  const generateInitialValues = () => {
    const values: { [key: string]: string } = {};
    formConfig.fields.forEach(field => {
      values[field.name] = '';
    });
    return values;
  };

  const validationSchema = Yup.object(
    formConfig.fields.reduce((schema, field) => {
      if (field.required) {
        schema[field.name] = Yup.string().required(`${field.name} er påkrevd`);
      }
      return schema;
    }, {} as { [key: string]: Yup.StringSchema })
  );

  return (
    <Formik
      initialValues={generateInitialValues()}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Submitted data:', values);
      }}
    >
      <Form>
        {formConfig.fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name}>{field.name}</label>
            <Field
              name={field.name}
              type={field.type}
              as={field.type === 'select' ? 'select' : 'input'}
            >
              {field.type === 'select' && (
                <>
                  <option value="">Velg...</option>
                  <option value="option1">Alternativ 1</option>
                  <option value="option2">Alternativ 2</option>
                </>
              )}
            </Field>
            <ErrorMessage name={field.name} component="div" className="error" />
          </div>
        ))}
        <button type="submit">Send Skjema</button>
      </Form>
    </Formik>
  );
};

export default FormViewer;
