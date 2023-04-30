import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import swal from 'sweetalert';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Joinuspage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      batch: '',
      rollno: '',
      department: '',
      email: '',
      phone: '',
    },

    validationSchema: yup.object({
      firstname: yup.string().required('First Name is required'),
      lastname: yup.string().required('Last Name is required'),
      batch: yup.string('Enter your Batch').required('Batch is required'),
      rollno: yup.string().required('Roll Number is required'),
      department: yup.string().required('Department is required'),
      email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
      phone: yup
        .string()
        .matches(/^\d{11}$/, 'Phone Number must be exactly 11 digits')
        .matches(/^\d+$/, 'Phone Number can only contain digits')
        .matches(/^0/, 'Phone Number must start with 0')
        .required('Phone Number is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      console.log(values);
      swal(
        'Successfully Registered',
        'Welcome to Cyber AI Club, you will be contacted shortly',
        'success'
      );
      setIsLoading(false);
      resetForm();
    },
  });
  return (
    <>
      <Navbar />
      <div className="form-row">
        <section className="form-section">
          <header className="form-header">
            <h3>Register</h3>
            <h4>Please fill your information below</h4>
          </header>
          <main className="form-main">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-item box-item">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                />
                <small>
                  {formik.touched.firstname && formik.errors.firstname}
                </small>
              </div>
              <div className="form-item box-item">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                />
                <small>
                  {formik.touched.lastname && formik.errors.lastname}
                </small>
              </div>
              <div className="form-item box-item">
                <input
                  type="text"
                  name="batch"
                  placeholder="Batch"
                  value={formik.values.batch}
                  onChange={formik.handleChange}
                />
                <small>{formik.touched.batch && formik.errors.batch}</small>
              </div>
              <div className="form-item box-item">
                <input
                  type="text"
                  name="rollno"
                  placeholder="Roll Number"
                  value={formik.values.rollno}
                  onChange={formik.handleChange}
                />
                <small>{formik.touched.rollno && formik.errors.rollno}</small>
              </div>
              <div className="form-item box-item">
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  value={formik.values.department}
                  onChange={formik.handleChange}
                />
                <small>
                  {formik.touched.department && formik.errors.department}
                </small>
              </div>
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
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                <small>{formik.touched.phone && formik.errors.phone}</small>
              </div>
              <div className="form-item submitbtn">
                {!isLoading ? (
                  <input value="Submit" type="submit" className="submit" />
                ) : (
                  <div className="loader"></div>
                )}
              </div>
            </form>
          </main>
          <i className="wave"></i>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Joinuspage;
