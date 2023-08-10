// import { Formik } from "formik";
// import * as yup from "yup";
import { nanoid } from "nanoid";
import { useState } from 'react';
// import { useAppDispatch, useAppSelector } from "../../utils/hook";
// import { registration } from "../../redux/auth/authOperations";
// import { selectIsLoadingAuth } from "../../redux/auth/selectorsAuth";
// import {
//   Label,
//   Button,
//   FormFormik,
//   InputFormik,
//   ErrorText,
// } from "./RegisterPage.styled";

// interface IRegister {
//   email: string;
//   password: string;
// }

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailIdReg = nanoid();
  const passwordIdReg = nanoid();
  //   const isLoading = useSelector(selectIsLoadingAuth);
  //   const dispatch = useAppDispatch();
  //   const user = useAppSelector((state) => state.auth.user);
  // const schema = yup.object().shape({
  //   email: yup.string().email().required(),
  //   password: yup.string().min(7).max(16).required(),
  // });

  // const initialValues: IRegister = {
  //   email: "",
  //   password: "",
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor={emailIdReg}>
          <span>Email</span>
          <input
            id={emailIdReg}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor={passwordIdReg}>
          <span>Password</span>
          <input
            id={passwordIdReg}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </main>
  );
};
export default RegisterPage;
