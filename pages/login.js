import React from "react";
import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "@/lib/validation";

function Login() {
  const [show, setShow] = useState(false);
  //formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //receives from /lib/validation.js
    validate: login_validate,
    onSubmit,
  });

  console.log(formik.errors);

  async function onSubmit(values) {
    console.log(values);
  }
  // Google handle function
  async function handleGoogleSignIn() {
    signIn(`google`, { callbackUrl: "http://localhost:3000" });
  }
  // Github SignIn
  async function handleGithubSignIn() {
    signIn(`github`, { callbackUrl: "http://localhost:3000" });
  }
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10 ">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className=" w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5">
          <div
            className={`${styles.input_group}${
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
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-400">{formik.errors.email}</span>
          ) : (
            <></>
          )}
          <div
            className={`${styles.input_group}${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => {
                setShow(!show);
              }}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500">{formik.errors.password}</span>
          ) : (
            <></>
          )}
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className={styles.button_custom}
            >
              Sign In with Google
              <Image
                src={"../assets/icons8-google-logo-100.svg"}
                width={20}
                height={20}
                alt="Google Logo"
              ></Image>
            </button>
          </div>
          <div className="input-button">
            <button
              onClick={handleGithubSignIn}
              type="button"
              className={styles.button_custom}
            >
              Sign in with Github{" "}
              <Image
                src={"/assets/icons8-github-cloud/iOS"}
                width={25}
                height={25}
                alt="Github Logo with clouds"
              ></Image>
            </button>
          </div>
        </form>
        {/* bottom */}
        <p className="text-gray-400 text-center ">
          No account yet?
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default Login;
