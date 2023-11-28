import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput, MyCheckbox, MySelect } from "../components";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <hr />

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().email("Email invalido").required("Requerido"),
          terms: Yup.boolean().isTrue("Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-junior"], "Esta opción no es permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Jeypi"
            />

            <MyTextInput label="Last Name" name="lastName" placeholder="Ruiz" />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="jeypi@gmail.com"
              type="email"
            />

            <MySelect name="jobType" as="select" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
