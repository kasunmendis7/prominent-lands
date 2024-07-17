import { Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "@mui/material/Button";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const path = useLocation().pathname;

  return (
    <Navbar className={`border-b-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <span
          className="px-3 py-1 bg-gradient-to-r from-slate-700 via-gray-500 to-slate-500 rounded-lg text-white"
        >
          Prominent
        </span>
        Lands
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button
        variant="outlined"
        sx={{
          color: theme === 'dark' ? 'white' : 'gray',
          backgroundColor: theme === 'dark' ? 'darkgray' : 'whitesmoke',
          borderColor: theme === 'dark' ? 'lightgray' : 'gray',
          borderRadius: "100px",
          display: { lg: "none" },
        }}
        className="w-12 h-10"
        color="inherit"
      >
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          variant="outlined"
          color="inherit"
          className="w-12 h-10 sm:hidden"
          sx={{
            color: theme === 'dark' ? 'white' : 'darkslategray',
            backgroundColor: theme === 'dark' ? 'gray' : 'white',
            borderColor: theme === 'dark' ? 'lightgray' : 'lightgray',
            borderRadius: "20px"
          }}
          onClick={toggleTheme}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        <Link to="sign-in">
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              color: theme === 'dark' ? 'white' : 'darkslategray',
              backgroundColor: theme === 'dark' ? 'gray' : 'white',
              borderColor: theme === 'dark' ? 'lightgray' : 'lightgray',
              borderRadius: "20px",
            }}
            className="w-15 h-10"
          >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact-us"} as={"div"}>
          <Link to="/contact-us">Contact Us</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
