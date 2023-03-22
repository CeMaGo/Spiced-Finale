import Layout from "@/layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiEyeOff, HiOutlineMail, HiOutlineEyeOff } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "@/lib/validation";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Register() {
  const [show, setShow] = useState({ password: false, confirmPassword: false });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      Username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });
  //passing Data to the backend
  async function onSubmit(values) {
    console.log("Values", values);
    const options = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    await fetch("http://localhost:3000/api/auth/signup", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("http://localhost:3000");
      });
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10 ">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className=" w-3/4 mx-auto text-gray-400">Lorem ipsum</p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.Username && formik.touched.Username
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className={styles.input_text}
              {...formik.getFieldProps("Username")}
            />
            <span className="icon flex items-center px-4">
              <FaUserAstronaut size={25} />
            </span>
            {/* {formik.errors.Username && formik.touched.Username ? (
              <span className="text-rose-600">{formik.errors.Username}</span>
            ) : (
              <></>
            )} */}
          </div>
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
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
              <HiOutlineMail size={25} />
            </span>
            {/* {formik.errors.email && formik.touched.email ? (
              <span className="text-rose-600">{formik.errors.email}</span>
            ) : (
              <></>
            )} */}
          </div>

          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            {/* password */}
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiOutlineEyeOff size={25} />
            </span>
            {/* {formik.errors.password && formik.touched.password ? (
              <span className="text-rose-600">{formik.errors.password}</span>
            ) : (
              <></>
            )} */}
          </div>

          {/* confirm password */}
          <div
            className={`${styles.input_group} ${
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show.confirmPassword ? "text" : "password"}`}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps("confirmPassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() =>
                setShow({ ...show, confirmPassword: !show.confirmPassword })
              }
            >
              <HiEyeOff size={25} />
            </span>
            {/* {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <span className="text-rose-600 ">
                {formik.errors.confirmPassword}
              </span>
            ) : (
              <></>
            )} */}
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
          <Link href={"/login"} className="text-indigo-800">
            <br />
            Sign In
          </Link>
        </p>
      </section>
    </>
  );
}
