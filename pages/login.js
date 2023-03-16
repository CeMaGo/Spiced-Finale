import React from "react";
import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);

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
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
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
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
            <div className="input-button">
              <button type="button" className={styles.button_custom}>
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
              <button type="button" className={styles.button_custom}>
                Sign in with github{" "}
                <Image
                  src={"../assets/icons8-github-cloud.svg"}
                  width={25}
                  height={25}
                  alt="Github Logo with clouds"
                ></Image>
              </button>
            </div>
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
