import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import swal from 'sweetalert';

const AdminLoginpage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup.string('Enter your Batch').required('Batch is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <>
      <div className="form-row">
        <section className="form-section">
          <header className="form-header">
            <h3>Login</h3>
            <h4>Please fill your information below</h4>
          </header>
          <main className="form-main">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-item box-item">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <small>{formik.touched.email && formik.errors.email}</small>
              </div>
              <div className="form-item box-item">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <small>
                  {formik.touched.password && formik.errors.password}
                </small>
              </div>

              <div className="form-item submitbtn">
                {!isLoading ? (
                  <input value="Login" type="submit" className="submit" />
                ) : (
                  <div className="loader"></div>
                )}
              </div>
            </form>
          </main>
          <i className="wave"></i>
        </section>
      </div>
    </>
  );
};

export default AdminLoginpage;
