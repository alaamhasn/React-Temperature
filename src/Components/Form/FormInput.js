import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 20%;
  background: white;
  border: 1px solid #00000029;
  font-size: 1.2em;
  margin: 1.5 em;
  padding: 0.25 em 1 em;
  border-radius: 3 px;

  &::placeholder {
    color: black;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const FormInput = (props) => {
  return <Input type={props.type} onChange={props.changeHandler} placeholder={props.placeholder} />;
};

export default FormInput;
