import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiEyeOff, HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "@/lib/validation";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter;
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
    const status = await signIn("Credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    console.log("status", status);
    if (status.ok) router.push(status.url);
  }
  // Github SignIn
  async function handleGithubSignIn() {
    signIn(`github`, { callbackUrl: "http://localhost:3000" });
  }
  return (
    <layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-8 ">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Login</h1>
          <p className=" w-4/4 mx-auto text-gray-400">
            There ain't no rest for the Wicked
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
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
          </div>
          {/* {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-400">{formik.errors.email}</span>
          ) : (
            <></>
          )} */}
          <div
            className={`${styles.input_group} ${
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
              <HiEyeOff size={25} />
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500">{formik.errors.password}</span>
          ) : (
            <></>
          )} */}
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              onClick={handleGithubSignIn}
              type="button"
              className={styles.button_custom}
            >
              Sign in with Github <FaGithub size={25} />
            </button>
          </div>
        </form>
        {/* bottom */}
        <p className="text-gray-400 text-center ">
          No account yet?
          <br />
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </layout>
  );
}
