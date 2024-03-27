import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./signup.css";

export const Signup = () => {
  const [signIn, toggle] = useState(true);
  const history = useHistory();

  localStorage.clear();

  return (
    <div
      className="body1 signup-page"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <div className="main1" style={{ backgroundColor: "#4791e1" }}>
        <input
          type="checkbox"
          id="chk"
          aria-hidden="true"
          className="input-signup"
        />
        <div className="signup1">
          <Formik
            initialValues={{
              name: "",
              mno: "",
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              axios
                .post("http://localhost:3000/signin/add", values)
                .then((res) => {
                  console.log(res);
                })
                .catch((error) => {
                  console.log(error);
                });
              // setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <Field
                type="text"
                name="name"
                placeholder="User name"
                required=""
                className="input-signup"
              />
              <Field
                type="tel"
                name="mno"
                placeholder="Mobile no"
                required=""
                className="input-signup"
              />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                required=""
                className="input-signup"
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                required=""
                className="input-signup"
              />
              <button className="admin-signup" type="submit">
                Sign up
              </button>
            </Form>
          </Formik>
        </div>

        <div className="login1">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              axios
                .post("http://localhost:3000/signin/login", values)
                .then((res) => {
                  console.log(res);
                  localStorage.setItem("admintoken", res.data.admintoken);
                  history.push("/index");
                })
                .catch((error) => {
                  console.log(error);
                });
              // setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                required=""
                className="input-signup"
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                required=""
                className="input-signup"
              />
              <button className="admin-signup" type="submit">
                Log in
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

// import React, { useState } from "react";
// import axios from "axios"; // Import Axios
// import { Formik, Field, Form } from "formik";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import './signup.css'

// export const Signup = () => {
//   const [signIn, toggle] = useState(true);
//   const history = useHistory()

//   return (
//     <div
//       className="body1 admin-signup"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         padding: "50px",
//       }}
//     >
//       <div className="main1" style={{ backgroundColor: "#4791e1" }}>
//         <input  type="checkbox" id="chk" aria-hidden="true" />
//         <div className="signup1">
//           <Formik
//             initialValues={{
//               name: "",
//               email: "",
//               mno : "",
//               password: "",
//             }}
//             onSubmit={async (values) => {
//               axios
//                 .post("http://localhost:3000/signin/add", values)
//                 .then((res) => {
//                   console.log(res);
//                 })
//                 .catch((error) => {
//                   console.log(error);
//                 });
//               // setSubmitting(false);
//             }}
//           >
//             <Form>
//               <label htmlFor="chk" aria-hidden="true" className="admin-label">
//                 Sign up
//               </label>
//               <Field
//                 type="text"
//                 name="name"
//                 placeholder="User name"
//                 required=""
//               />
//                <Field
//                 type="tel"
//                 name="mno"
//                 placeholder="Mobile no"
//                 required=""
//               />
//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required=""
//               />
//               <Field
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required=""
//               />
//               <button type="submit">Sign up</button>
//             </Form>
//           </Formik>
//         </div>

//         <div className="login1">
//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//             }}
//             onSubmit={async (values) => {
//               axios
//                 .post("http://localhost:3000/signin/login", values)
//                 .then((res) => {
//                   console.log(res);
//                   history.push("/")
//                 })
//                 .catch((error) => {
//                   console.log(error);
//                 });
//               // setSubmitting(false);
//             }}
//           >
//             <Form>
//               <label htmlFor="chk" aria-hidden="true" className="h1">
//                 Login
//               </label>
//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required=""
//               />
//               <Field
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required=""
//               />
//               <button type="submit">Log in</button>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };
