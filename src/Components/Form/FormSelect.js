import React from "react";
import styled from "styled-components";

const Select = styled.select`
  
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width:40%;
  background: white;
  border: 1px solid #00000029;
  font-size: 1.2em;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const FormSelect = (props) => {
  return (
    <Select onChange={props.changeHandler}>
      <option value="" hidden>
        Type
      </option>
      <option value="Fahrenheit">Fahrenheit</option>
      <option value="Kelvin">Kelvin</option>
    </Select>
  );
};

export default FormSelect;
