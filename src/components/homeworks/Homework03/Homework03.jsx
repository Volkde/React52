import React from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import "./styles.css";

function Homework03() {
  return (
    <div className="homework03-wrapper">
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <Button name="Send email" type="submit" />
    </div>
  );
}

export default Homework03;