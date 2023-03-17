import React from "react";

export default function login_validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //validation for password
  if (!values.password) {
    error.password = "A Password is Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    error.password = "Must be greater then 8 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Your Password seems to be Invalid";
  }
  return errors;
}

//validation for registration
export function registerValidat(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "A Username is required";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid Username ";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    error.password = "A Password is Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    error.password = "Must be greater then 8 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Your Password seems to be Invalid";
  }

  if (values.cpassword) {
    error.cpassword = "Required";
  } else if (values.password !== values.cpassword) {
    error.cpassword = "Sadly it's not a Match, try agian.";
  } else if (values.cpassword.includes(" ")) {
    error.cpassword = "Invalid Confirm Password";
  }
  return errors;
}
