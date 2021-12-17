import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  border: 2px solid #5596f6;
  background: #5596f6;
  font-size: 1.2em;
  margin: 0.5em;
  margin-top: 0.7em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const FormButton = (props) => {
  return <Button onClick={props.clickHandller}>{props.title}</Button>;
};

export default FormButton;
