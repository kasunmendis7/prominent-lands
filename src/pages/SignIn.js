import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label, TextInput } from "flowbite-react";
import Button  from "@mui/material/Button";

export default function SignIn() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: ({ resetForm }) => {
      navigate("/"); 
      resetForm();
    },
  });
  return (
    <div className="min-h-screen mt-40">
      <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-6">
        {/* Left Side*/}
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
        {/*Right Side*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            <div>
              <Label>
                Email:
                <TextInput
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="Password"
                  id="password"
                  {...formik.getFieldProps("password")}
                />
              </Label>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </div>

            <Button type="submit"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "gray",
                borderColor: "black",
                borderRadius: "7px",
                fontFamily:'inherit',
                "&:hover": {
                  color: "HighlightText",
                  backgroundColor: "darkgray",
                  fontFamily:'inherit',
                  fontWeight: 'bold',
                },
              }}
            >
              Sign In
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/sign-up' className="text-blue-500">Sign Up</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
