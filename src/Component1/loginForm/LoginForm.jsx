import { useState } from "react";
import "./LoginForm.css";
import "test-directory";
//  import "test-my-module"
const LoginForm = props => {
 
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const {printcall}=require('');

// console.log(test-directory.); 
// console.log("hello world"); 



  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };
  let url="https://reactjs.org/docs/hooks-custom.html";
  return (
    <form className="form" onSubmit={onSubmitForm}>
      <div className="formGroup">
        <label className="formLabel">Email</label>
        <input
          className="formField"
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
      </div>
      <div className="formGroup">
        <label className="formLabel">Password</label>
        <input
          className="formField"
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
      </div>
      <div className="formGroup">
        <label className="formLabel">Confirm Password</label>
        <input
          className="formField"
          type="password"
          aria-label="Confirm password field"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
        />
      </div>
      <a  formActions href={url}> signup</a>
      <div className="formActions">
        <button className="formSubmitBtn" type="submit">
          Login
        </button>
      
      </div>
    </form>
  );
};

export default LoginForm;

// import clsx from "clsx";

// import { useLoginFormValidator } from "./hooks/useLoginFormValidator";

// const LoginForm = props => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
  
//   const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

//   const onUpdateField = e => {
//     const field = e.target.name;
//     const nextFormState = {
//       ...form,
//       [field]: e.target.value,
//     };
//     setForm(nextFormState);
//     if (errors[field].dirty)
//       validateForm({
//         form: nextFormState,
//         errors,
//         field,
//       });
//   };

//   const onSubmitForm = e => {
//     e.preventDefault();
//     const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
//     if (!isValid) return;
//     alert(JSON.stringify(form, null, 2));
//   };

//   return (
//     <form className="form" onSubmit={onSubmitForm}>
//       <div className="formGroup">
//         <label className="formLabel">Email</label>
//         <input
//           className={clsx(
//             "formField",
//             errors.email.dirty && errors.email.error && "formFieldError"
//           )}
//           type="text"
//           aria-label="Email field"
//           name="email"
//           value={form.email}
//           onChange={onUpdateField}
//           onBlur={onBlurField}
//         />
//         {errors.email.dirty && errors.email.error ? (
//           <p className="formFieldErrorMessage">{errors.email.message}</p>
//         ) : null}
//       </div>
//       <div className="formGroup">
//         <label className="formLabel">Password</label>
//         <input
//           className={clsx(
//             "formField",
//             errors.password.dirty &&
//               errors.password.error &&
//               "formFieldError"
//           )}
//           type="password"
//           aria-label="Password field"
//           name="password"
//           value={form.password}
//           onChange={onUpdateField}
//           onBlur={onBlurField}
//         />
//         {errors.password.dirty && errors.password.error ? (
//           <p className="formFieldErrorMessage">
//             {errors.password.message}
//           </p>
//         ) : null}
//       </div>
//       <div className="formGroup">
//         <label className="formLabel">Confirm Password</label>
//         <input
//           className={clsx(
//             "formField",
//             errors.confirmPassword.dirty &&
//               errors.confirmPassword.error &&
//               "formFieldError"
//           )}
//           type="password"
//           aria-label="Confirm password field"
//           name="confirmPassword"
//           value={form.confirmPassword}
//           onChange={onUpdateField}
//           onBlur={onBlurField}
//         />
//         {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
//           <p className="formFieldErrorMessage">
//             {errors.confirmPassword.message}
//           </p>
//         ) : null}
//       </div>
//       <div className="formActions">
//         <button className="formSubmitBtn" type="submit">
//           Login
//         </button>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;
