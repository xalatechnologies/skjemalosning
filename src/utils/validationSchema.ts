import * as Yup from 'yup';

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Passordet må være minst 8 tegn')
    .required('Passord er påkrevd'),
  
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passordene må samsvare')
    .required('Bekreft passordet'),
});

export default validationSchema;
