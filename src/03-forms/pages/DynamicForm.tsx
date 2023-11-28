import { Form, Formik } from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 1,  `Minimo de ${(rule as any).value || 1} caracteres`)
    }

    if (rule.type === 'email') {
      schema = schema.email('Email inválido');
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              switch (type) {
                case "input" || "password" || "email":
                  return (
                    <MyTextInput
                      key={name}
                      label={label}
                      type={type as any}
                      name={name}
                      placeholder={placeholder}
                    />
                  );

                case "select":
                  return (
                    <MySelect label={label} key={name} name={name}>
                      <option value="">Select an option</option>
                      {
                        options?.map(opt => (
                          <option key={opt.id} value={opt.id}>{opt.description}</option>
                        ))
                      }
                    </MySelect>
                  );

                default:
                  throw new Error(`El tipo ${type} no es soportado`);
              }
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
