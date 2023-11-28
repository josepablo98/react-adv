import { ErrorMessage, Field, Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from 'yup';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <hr />

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Requerido')
            .min(2, 'Debe de tener al menos 2 caracteres')
            .max(15, 'Debe de tener 15 caracteres o menos'),
          email: Yup.string()
            .required('Requerido')
            .email('Email inválido'),
          password1: Yup.string()
            .required('Requerido')
            .min(6, 'Debe de tener al menos caracteres'),
          password2: Yup.string()
            .required('Requerido')
            .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir')
        })}>
          {
            (formik) => (
              <Form>
                <label htmlFor="name">Nombre</label>
                <Field name="name" type="text" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="name" component="span" />

                <label htmlFor="email">Email</label>
                <Field name="email" type="email" placeholder="Ingrese su email"/>
                <ErrorMessage name="email" component="span" />

                <label htmlFor="password1">Contraseña</label>
                <Field name="password1" type="password" placeholder="Ingrese su contraseña"/>
                <ErrorMessage name="password1" component="span" />

                <label htmlFor="password2">Repita su contraseña</label>
                <Field name="password2" type="password" placeholder="Repita su contraseña"/>
                <ErrorMessage name="password2" component="span" />

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </Form>
            )
          }
        </Formik>
    </div>
  );
};
