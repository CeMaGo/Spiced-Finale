import React from "react";
import Layout from "@/layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import { registerValidat } from "@/lib/validation";

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formic = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidat,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <Layout>
        <title>Register</title>
        <section className="w-3/4 mx-auto flex flex-col gap-8 ">
          <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
            <p className=" w-3/4 mx-auto text-gray-400">Lorem ipsum</p>
          </div>
          {/* form */}
          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div
              className={`${styles.input_group}${
                formik.errors.username && formik.touched.username
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="text"
                name="Username"
                placeholder="Username"
                className={styles.input_text}
                {...formik.getFieldProps("username")}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
              {formik.error.username && formik.touched.username ? (
                <span className="text-rose-600">{formic.error.username}</span>
              ) : (
                <></>
              )}
            </div>
            <div
              className={`${styles.input_group}${
                formik.errors.username && formik.touched.username
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_text}
                {...formik.getFieldProps("email")}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
              {formik.error.email && formik.touched.email ? (
                <span className="text-rose-600">{formic.error.email}</span>
              ) : (
                <></>
              )}
            </div>
            <div
              className={`${styles.input_group}${
                formik.errors.username && formik.touched.username
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type={`${show.password ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className={styles.input_text}
                {...formik.getFieldProps("password")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => {
                  setShow({ ...show, password: !show.password });
                }}
              >
                <HiFingerPrint size={25} />
              </span>
              {formik.error.password && formik.touched.password ? (
                <span className="text-rose-600">{formic.error.password}</span>
              ) : (
                <></>
              )}
            </div>
            <div
              className={`${styles.input_group}${
                formik.errors.username && formik.touched.username
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Confirm Password"
                className={styles.input_text}
                {...formik.getFieldProps("cpassword")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => {
                  setShow({ ...show, cpassword: !show.cpassword });
                }}
              >
                <HiFingerPrint size={25} />
              </span>
              {formik.error.cpassword && formik.touched.cpassword ? (
                <span className="text-rose-600 ">{formic.error.cpassword}</span>
              ) : (
                <></>
              )}
            </div>
            {/* login buttons */}
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Sign Up
              </button>
            </div>
          </form>
          {/* bottom */}
          <p className="text-gray-400 text-center ">
            Already have an account?
            <Link href={"/login"} className="text-blue-700">
              Sign In
            </Link>
          </p>
        </section>
      </Layout>
    </div>
  );
}
