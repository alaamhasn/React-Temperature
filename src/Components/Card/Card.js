import React, { useState } from "react";
import styled from "styled-components";
import FormButton from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import FormSelect from "../Form/FormSelect";

const Wrapper = styled.section`
  padding: 4em;
  background: #ffffff;
  margin: 20%;
  margin-top: 10%;
  text-align: center;
  position: absolute;
  width: 50vw;
  box-shadow: 3px 5px #c2cddc;
  border-radius: 10px;
`;

const BR = styled.br``;
const Result = styled.h3`
  float: left;
  margin: 3em;
`;

const Card = () => {
  const [DegreeType, setDegreeType] = useState("");
  const [Degree, setDegree] = useState(0);
  const [r, setR] = useState(0);
  let x = 0;
  const changeHandlerS = (event) => {
    setDegreeType(event.target.value);
  };

  const changeHandlerI = (event) => {
    setDegree(event.target.value);
  };
  const clickHandller = () => {
    if (Degree > 0 && DegreeType.length > 0) {
      if (DegreeType === "Fahrenheit") {
        x = ((Degree - 32) * 5) / 9;
        setR(x);
      } else {
        x = Degree - 273.15;
        setR(x);
      }
    }
  };

  return (
    <Wrapper>
      <FormInput
        type="number"
        placeholder="Degree"
        changeHandler={changeHandlerI}
        changeHandler={changeHandlerI}
      />
      <FormSelect changeHandler={changeHandlerS} />
      <FormButton title="Convert" clickHandller={clickHandller} />
      <BR />
      <Result>{r} C</Result>
    </Wrapper>
  );
};

export default Card;
