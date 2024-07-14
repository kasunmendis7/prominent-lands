import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label, TextInput } from "flowbite-react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

export default function SignUp() {
  const navigate = useNavigate(); // Initialize the navigate function

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      Swal.fire({
        title: "Success!",
        text: "Account created successfully!",
        icon: "success",
        confirmButtonText: "OK"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-in"); // Navigate to the sign-in page
        }
      });
      resetForm();
    },
  });

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-6">
        {/* Left Side */}
        <div className="flex-1">
          <Link
            to="/"
            className="self-center whitespace-nowrap font-bold text-4xl"
          >
            <span
              className="px-3 py-1 bg-gradient-to-r from-slate-700
         via-gray-500
        to-slate-500 rounded-lg text-white"
            >
              Prominent
            </span>
            Lands
          </Link>
          <p className="text-sm mt-5">
            Our real estate company excels in providing exceptional service,
            innovative solutions, and personalized experiences for all your
            property needs.
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            <div>
              <Label>
                Username:
                <TextInput
                  type="text"
                  placeholder="Username"
                  id="username"
                  {...formik.getFieldProps("username")}
                />
              </Label>
              {formik.touched.username && formik.errors.username ? (
                <div style={{ color: "red" }}>{formik.errors.username}</div>
              ) : null}
            </div>
            <div>
              <Label>
                Email:
                <TextInput
                  type="email"
                  placeholder="name@gmail.com"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
              </Label>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <Label>
                Password:
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  {...formik.getFieldProps("password")}
                />
              </Label>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </div>
            <div>
              <Label>
                Confirm Password:
                <TextInput
                  type="password"
                  placeholder="Confirm your password"
                  id="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                />
              </Label>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "gray",
                borderColor: "black",
                borderRadius: "7px",
                fontFamily: "inherit",
                "&:hover": {
                  color: "HighlightText",
                  backgroundColor: "darkgray",
                  fontFamily: "inherit",
                  fontWeight: "bold",
                },
              }}
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
