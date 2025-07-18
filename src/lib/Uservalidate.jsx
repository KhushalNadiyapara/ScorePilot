import * as yup from "yup";

export const userSchema = yup.object().shape({
  fname: yup.string().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});


export const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};
