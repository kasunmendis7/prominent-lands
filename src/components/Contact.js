import { Button, Container } from "@mui/material";
import { Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7582891c-a0ea-49d2-b02c-915cc1a54762");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl m-10">Contact Us</h1>
      <Container>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="mb-5">
            <Label className="text-lg">Full Name :</Label>
            <TextInput
              type="text"
              name="name"
              placeholder="Enter you full name"
              required
            />
          </div>
          <div className="mb-5">
            <Label className="text-lg">Email :</Label>
            <TextInput
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-5">
            <Label className="text-lg">Message :</Label>
            <Textarea
              name="message"
              cols="30"
              rows="12"
              className="mb-5"
              placeholder="Enter your message"
              required
            ></Textarea>
          </div>
          <div className="mb-10">
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "gray",
                borderRadius: "7px",
                fontFamily: "inherit",
                width: "100%",
                "&:hover": {
                  color: "HighlightText",
                  backgroundColor: "darkgray",
                  fontFamily: "inherit",
                  fontWeight: "bold",
                },
              }}
            >
              Submit Form
            </Button>
          </div>
        </form>
      </Container>
      <span>{result}</span>
    </div>
  );
}
