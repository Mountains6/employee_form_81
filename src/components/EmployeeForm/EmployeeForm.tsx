import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { ResultCard } from "../ResultCard/ResultCard";
import { FormContainer, FormComponent, Title, MainWrapper } from "./styles";
import type { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const [submittedData, setSubmittedData] = useState<EmployeeFormValues | null>(
    null,
  );

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Field name is required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    surname: Yup.string()
      .required("Field surname is required")
      .max(15, "Max 15 symbols"),
    age: Yup.number()
      .required("Field age is required")
      .typeError("Value age must be number")
      .min(18, "Min age 18")
      .max(80, "Max age 80"),
    jobPosition: Yup.string().max(30, "Max 30 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    } as EmployeeFormValues,

    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: EmployeeFormValues) => {
      setSubmittedData(values);
      console.table(values);
    },
  });

  return (
    <MainWrapper>
      <Title>Create Employee</Title>
      <FormContainer>
        <FormComponent onSubmit={formik.handleSubmit}>
          <Input
            name="name"
            label="Name*"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />

          <Input
            name="surname"
            label="Surname*"
            placeholder="Enter surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.errors.surname}
          />

          <Input
            name="age"
            label="Age*"
            placeholder="Enter age"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.errors.age}
          />

          <Input
            name="jobPosition"
            label="Job Position"
            placeholder="Enter job position"
            value={formik.values.jobPosition}
            onChange={formik.handleChange}
            error={formik.errors.jobPosition}
          />

          <Button name="CREATE" type="submit" />
        </FormComponent>

        {submittedData && <ResultCard data={submittedData} />}
      </FormContainer>
    </MainWrapper>
  );
}

export default EmployeeForm;
